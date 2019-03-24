using Oxide.Core.Libraries;
using Oxide.Core.Libraries.Covalence;
using Oxide.Core;
using Oxide.Core.Plugins;
using Oxide.Core.Configuration;
using System.Collections.Generic;
using System;
using UnityEngine;
using System.Linq;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Data;
using Network;

namespace Oxide.Plugins
{
    [Info("dcpc", "ReaperOfVeriod", "0.1.0")]
    [Description("Makes epic stuff happen")]
    class dcpc : CovalencePlugin
    {
        private void Init()
        {
            Puts("initialise dcpc");
        }

        [Command("test")]
        private void TestCommand(IPlayer player, string command, string[] args)
        {
            player.Reply("Test successful!");


            Dictionary<string, string> parameters = new Dictionary<string, string>();

            parameters.Add("SteamID", "test123");
            parameters.Add("_id", "5c94bf6dc20a301b1829ba0b");

            string[] body = string.Join("&", parameters.Cast<string>().Select(key => string.Format("{0}={1}", key, source[key]));

            webrequest.Enqueue("http://localhost:3000/User", body, (code, response) =>
            {
                if (code != 200 || response == null)
                {
                    Puts($"error 400");
                    return;
                }
                Puts($"{response}");
            }, this, RequestMethod.PUT);
        }

    }
}
