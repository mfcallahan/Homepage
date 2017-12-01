using Newtonsoft.Json;
using System.Net.Http;
using System.Security.Cryptography;
using System.Text;

#pragma warning disable 1591
namespace Homepage.Web.Data
{
    public class Tools
    {
        public static void SerializeApiResponse<T>(ref HttpResponseMessage response, ref T apiResponse)
        {
            response.Content = new StringContent(JsonConvert.SerializeObject(apiResponse), Encoding.UTF8, "application/json");
        }

        public static string GenerateRandonString(int length, bool useNums)
        {
            if (length < 0)
                length = 0;

            if (length > 1000)
                length = 1000;

            byte[] data = new byte[1];
            char[] chars = null;

            if (useNums)
            {
                chars = new char[62];
                chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".ToCharArray();
            }
            else
            {
                chars = new char[52];
                chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".ToCharArray();
            }     

            using (RNGCryptoServiceProvider crypto = new RNGCryptoServiceProvider())
            {
                crypto.GetNonZeroBytes(data);
                data = new byte[length];
                crypto.GetNonZeroBytes(data);
            }

            StringBuilder result = new StringBuilder(length);
            foreach (byte b in data)            
                result.Append(chars[b % (chars.Length)]);
            
            return result.ToString();
        }
    }
}
#pragma warning restore 1591