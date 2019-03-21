using System;
using Oxide.Core.Libraries.Covalence;

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
        }

    }
}
