using System;
using Oxide.Core.Libraries.Covalence;
using Oxide.Core.Libraries.Webrequest;

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

            webrequest.Enqueue("http://www.google.com/search?q=umod", null, (code, response) => {
                if (code != 200 || response == null) {
                    Puts($"Couldn't get an answer from Google!");
                    return;
                }
                Puts($"Google answered: {response}");
            }, this, RequestMethod.GET);
        }

    }
}
