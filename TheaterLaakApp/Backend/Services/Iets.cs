namespace Backend.Services
{
    public class Iets : IIets
    {
        public int Min(int a, int b)
        {
            return a - b;
        }

        public int Plus(int a, int b)
        {
            return a + b;
        }
    }
}