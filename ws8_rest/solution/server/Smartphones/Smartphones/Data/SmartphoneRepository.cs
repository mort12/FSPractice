using Smartphones.Models;

namespace Smartphones.Data
{
    public class SmartphoneRepository : ISmartphoneRepository
    {
        private readonly SmartphoneContext _ctx;

        public SmartphoneRepository(SmartphoneContext ctx)
        {
            _ctx = ctx;
        }

        public void Create(Smartphone smartphone)
        {
            if (smartphone == null) return;

            _ctx.Smartphones.Add(smartphone);
            _ctx.SaveChanges();
        }

        public IEnumerable<Smartphone> ReadAll()
        {
            return _ctx.Smartphones.ToList();
        }

        public Smartphone? Read(int id)
        {
            return _ctx.Smartphones.FirstOrDefault(s => s.Id == id);
        }

        public void Update(Smartphone smartphone)
        {
            if (smartphone == null) return;

            var item = Read(smartphone.Id);
            if (item == null) return;

            item.Model = smartphone.Model;
            item.Price = smartphone.Price;
            item.ScreenSize = smartphone.ScreenSize;
            item.Rating = smartphone.Rating;

            //_ctx.Smartphones.Update(item);
            _ctx.SaveChanges();
        }

        public void Delete(int id)
        {
            if (id < 0) return;
            var smartphone = Read(id);
            if (smartphone == null) return;

            _ctx.Smartphones.Remove(smartphone);
            _ctx.SaveChanges();
        }
    }
}