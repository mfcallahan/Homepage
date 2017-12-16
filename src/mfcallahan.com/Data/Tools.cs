using Newtonsoft.Json;
using System.Net.Http;
using System.Security.Cryptography;
using System.Text;

namespace Homepage.Data
{
    public class Tools
    {
        public static void SerializeApiResponse<T>(ref HttpResponseMessage response, ref T apiResponse)
        {
            response.Content = new StringContent(JsonConvert.SerializeObject(apiResponse), Encoding.UTF8, "application/json");
        }

        // generate a cryptographically secure random string
        public static string GenerateRandonString(int len, bool useNums)
        {
            if (len < 0)
                len = 0;
            if (len > 1000)
                len = 1000;

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

            // RNGCryptoServiceProvider Class: Implements a cryptographic Random Number Generator (RNG) using
            // the implementation provided by the cryptographic service provider (CSP).
            // https://docs.microsoft.com/en-us/dotnet/api/system.security.cryptography.rngcryptoserviceprovider

            using (RNGCryptoServiceProvider c = new RNGCryptoServiceProvider())
            {
                c.GetNonZeroBytes(data);
                data = new byte[len];
                c.GetNonZeroBytes(data);
            }

            StringBuilder result = new StringBuilder(len);
            foreach (byte b in data)            
                result.Append(chars[b % (chars.Length)]);
            
            return result.ToString();
        }
    }
}