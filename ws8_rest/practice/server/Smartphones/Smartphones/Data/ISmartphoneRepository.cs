using Smartphones.Models;

namespace Smartphones.Data
{
    public interface ISmartphoneRepository
    {
        void Create(Smartphone smartphone);
        IEnumerable<Smartphone> ReadAll();
        Smartphone? Read(int id);
        void Update(Smartphone smartphone);
        void Delete(int id);
    }
}