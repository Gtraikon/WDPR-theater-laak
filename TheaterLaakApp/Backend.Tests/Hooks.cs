/*using System;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Backend;
using Backend.Data;
using Backend.Models;
using TechTalk.SpecFlow;

namespace Backend.Tests.Hooks;

[Binding]
public sealed class Hooks
{
    private static IHost? _host;
    private DatabaseData _databaseData;

    public Hooks(DatabaseData databaseData)
    {
        _databaseData = databaseData;
    }

    [BeforeTestRun]
    public static async Task BeforeTestRun()
    {
        _host = await Program.MaakWebApplication(new string[] { });
        _host.Start();
    }

    [AfterTestRun]
    public static async Task AfterTestRun()
    {
        await _host!.StopAsync();
    }

    [BeforeScenario]
    public async Task BeforeScenario()
    {
        _databaseData._host = _host!;
        _databaseData.Context.Attractie.RemoveRange(_databaseData.Context.Attractie);
        _databaseData.Context.Gast.RemoveRange(_databaseData.Context.Gast);
        _databaseData.Context.Reservering.RemoveRange(_databaseData.Context.Reservering);
        await _databaseData.Context.SaveChangesAsync();
    }
    [AfterScenario]
    public void AfterScenario()
    {
        _databaseData.Dispose();
    }
}

public class DatabaseData : IDisposable
{
    public IHost? _host { get; set; }
    private IServiceScope? _scope = null;
    private BackendContext? _context = null;

    public BackendContext Context
    {
        get
        {
            if (_scope == null)
                _scope = _host.Services.CreateScope();
            if (_context == null)
                _context = _scope.ServiceProvider.GetService<BackendContext>() ?? throw new Exception("Cannot find database!");
            return _context;
        }
    }

    public void Dispose()
    {
        if (_context != null)
            _context.Dispose();
        if (_scope != null)
            _scope.Dispose();
    }
}*/
