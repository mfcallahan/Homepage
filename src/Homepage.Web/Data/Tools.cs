using Homepage.Dtos;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Web;
using System.Xml;
using System.Xml.Serialization;

namespace Homepage.Web.Data
{
    public class Tools
    {
        public static bool ValidateDataType(string datatype)
        {
            string[] validInputDataTypes = { "json", "xml" };
            return validInputDataTypes.Any(datatype.ToLower().Equals);
        }

        public static void SerializeApiResponse<T>(ref HttpResponseMessage response, ref T apiResponse, string datatype)
        {
            switch (datatype.ToLower())
            {
                case "xml":
                    response.Content = new StringContent(SerializeXmlApi(apiResponse), Encoding.UTF8, "application/xml");
                    break;
                default:
                    response.Content = new StringContent(JsonConvert.SerializeObject(apiResponse), Encoding.UTF8, "application/json");
                    break;
            }
        }

        static string SerializeXmlApi<T>(T output)
        {
            string xml;
            XmlSerializer xs = new XmlSerializer(typeof(ApiResponseHello));
            StringWriter sw = new StringWriter();
            using (XmlWriter writer = XmlWriter.Create(sw))
            {
                xs.Serialize(writer, output);
                xml = sw.ToString();
            }

            return xml;
        }
    }
}