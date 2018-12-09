using dt.storage.application.Configuration;
using dt.storage.infrastructure.Context;
using dt.storage.infrastructure.Repository;
using System;
using ScrapySharp.Network;
using System.Collections.Generic;

namespace dt.Scraper
{
    public class ScrapData
    {
        private Service _service;
        private Uri _uri;
        private AppConfiguration _appConfiguration;
        private MyContext _context;
        private DbRepository _dbRepository;

        public ScrapData(Uri uri)
        {
            _uri = uri;
            _appConfiguration = new AppConfiguration();
            _context = new MyContext(_appConfiguration.PostgreSQL);
            _dbRepository = new DbRepository(_context);
            _service = new Service(new ScrapingBrowser());
        }

        public List<List<string>> getData()
        {
            return _service.StartScrapping(_uri);
        }

        public void saveScrapedData(List<List<string>> data)
        {
            _dbRepository.SaveMeals(data);
        }
    }
}
