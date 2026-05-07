using Smartphones.Data;

namespace Smartphones
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // DB dependency injection
            builder.Services.AddDbContext<SmartphoneContext>();
            builder.Services.AddTransient<ISmartphoneRepository, SmartphoneRepository>();

            builder.Services.AddControllersWithViews();

            var app = builder.Build();

            app.UseRouting();

            app.MapControllerRoute(
                name: "default",
                pattern: "{controller}/{action}/{id?}"
            );

            app.Run();
        }
    }
}