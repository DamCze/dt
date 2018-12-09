using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ScrapySharp.Extensions;
using ScrapySharp.Network;

namespace dt.Scraper
{
    public class Service
    {
        private ScrapingBrowser _browser;

        public Service(ScrapingBrowser browser)
        {
            _browser = browser;
            _browser.AllowAutoRedirect = true;
            _browser.AllowMetaRedirect = true;
            _browser.Encoding = new UTF8Encoding();
        }

        public List<List<string>> StartScrapping(Uri uri)
        {
            WebPage pageResult = _browser.NavigateToPage(uri);
            var table = pageResult.Html.CssSelect(".MsoTableGrid").First();

            List<List<string>> parsedTbl = table.SelectNodes("tbody")
                .Descendants("tr")
                .Skip(1)
                .Where(tr => tr.Elements("td").Count() > 1)
                .Select(tr => tr.Elements("td").Select(td => td.InnerText.Trim()).ToList())
                .ToList();

            return parsedTbl;
        }
    }
}
