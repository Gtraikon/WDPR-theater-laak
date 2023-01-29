using System.Net;

namespace Backend.Services
{
    public class DenyListMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly DenyList _denyList;

        public DenyListMiddleware(RequestDelegate next)
        {
            _next = next;
            _denyList = new DenyList();
        }

        public async Task Invoke(HttpContext context)
        {
            var remoteIpAddress = context.Connection.RemoteIpAddress.ToString();
            var userAgent = context.Request.Headers["User-Agent"].ToString();

            if (_denyList.DeniedIpAddresses.Contains(remoteIpAddress) || _denyList.DeniedUserAgents.Contains(userAgent))
            {
                context.Response.StatusCode = (int)HttpStatusCode.Forbidden;
                await context.Response.WriteAsync("Toegang geweigerd");
                return;
            }

            await _next.Invoke(context);
        }


    }

    public class DenyList
    {
        public List<string> DeniedIpAddresses { get; set; }
        public List<string> DeniedUserAgents { get; set; }

        public DenyList()
        {
            DeniedIpAddresses = new List<string>();
            DeniedUserAgents = new List<string>();

            DeniedIpAddresses.Add("192.168.0.1");
            DeniedIpAddresses.Add("192.168.0.2");

            DeniedUserAgents.Add("BadBot 1.0");
            DeniedUserAgents.Add("AnotherBadBot 2.0");
        }
    }
}