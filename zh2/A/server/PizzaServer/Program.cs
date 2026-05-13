using PizzaServer.Data;

namespace PizzaServer
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // data services registration
            builder.Services.AddSingleton<PizzaServiceContext>();
            builder.Services.AddTransient<IPizzaServiceRepository, PizzaServiceRepository>();

            // CORS services registration
            builder.Services.AddCors();

            var app = builder.Build();

            app.MapGet("/", () => "In crust we trust — place your order and let the cheese do the talking!");

            // CORS configuration
            app.UseCors(x => x
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader()
                .WithOrigins("http://localhost:5500", "http://127.0.0.1:5500"));

            app.Run();
        }
    }
}