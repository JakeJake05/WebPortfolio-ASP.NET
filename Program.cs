var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

// Define custom routes


/*
app.MapControllerRoute(
    name: "index",
    pattern: "home/index",
    defaults: new { controller = "Home", action = "Index" });
*/
app.MapControllerRoute(
    name: "aboutme",
    pattern: "home/about-me",
    defaults: new { controller = "Home", action = "AboutMe" });

app.MapControllerRoute(
    name: "privacy-policy",
    pattern: "home/privacy-policy",
    defaults: new { controller = "Home", action = "Privacy" });


app.MapControllerRoute(
    name: "education",
    pattern: "home/education",
    defaults: new { controller = "Home", action = "Education" });
app.MapControllerRoute(
    name: "education",
    pattern: "home/education",
    defaults: new { controller = "Achivements_1", action = "Education" });
app.MapControllerRoute(
    name: "education",
    pattern: "home/education",
    defaults: new { controller = "Achivements_2", action = "Education" });



app.MapControllerRoute(
    name: "resume",
    pattern: "home/resume",
    defaults: new { controller = "Home", action = "Resume" });

app.MapControllerRoute(
    name: "skills",
    pattern: "home/skills",
    defaults: new { controller = "Home", action = "Skills" });

app.MapControllerRoute(
    name: "experience",
    pattern: "home/experience",
    defaults: new { controller = "Home", action = "Experience" });

app.MapControllerRoute(
    name: "projects",
    pattern: "home/projects",
    defaults: new { controller = "Home", action = "Projects" });


app.MapControllerRoute(
    name: "achievements",
    pattern: "home/education/achievements",
    defaults: new { controller = "Education", action = "Achievements" });


// Define the default route to point to Home/Index

app.MapControllerRoute(
    name: "default",
    pattern: "",
    defaults: new { controller = "Home", action = "Index" });



/*
app.MapControllerRoute(
    name: "default",
    pattern: "",
    defaults: new { controller = "Settings", action = "Settings" });
*/
app.Run();
