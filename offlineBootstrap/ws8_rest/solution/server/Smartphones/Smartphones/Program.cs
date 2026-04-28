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

            // add controllers
            builder.Services.AddControllersWithViews();

            // swagger
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            app.UseRouting();
            app.MapControllerRoute(
                name: "default",
                pattern: "{controller}/{action=Index}/{id?}"
            );

            //app.UseStaticFiles();

            app.MapGet("/", () =>
            {
                return $"Smartphones API";
            });

            // use swagger only in development environment
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();

                //http://localhost:5047/swagger/
            }

            app.UseCors(x => x
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader()
                .WithOrigins("http://localhost:5500", "http://127.0.0.1:5500"));

            app.Run();
        }
    }
}
