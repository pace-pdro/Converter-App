using System;
using System.Net.Http;
using System.Web.Mvc;

namespace CurrencyConverter.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public async System.Threading.Tasks.Task<ActionResult> Convert(string amount, string from, string to)
        {
            // Get exchange rate from API
            var url = $"https://api.exchangerate-api.com/v4/latest/{from}";
            var client = new HttpClient();
            var response = await client.GetAsync(url);
            var data = await response.Content.ReadAsAsync<dynamic>();
            var rate = data.rates[to];

            // Convert the amount
            var result = Convert.ToDecimal(amount) * Convert.ToDecimal(rate);
            var result_formatted
