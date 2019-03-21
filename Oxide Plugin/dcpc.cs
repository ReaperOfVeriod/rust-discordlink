using System;

namespace Oxide.Plugins
{
    [Info("dcpc", "ReaperOfVeriod", "0.1.0")]
    [Description("Makes epic stuff happen")]
    class EpicStuff : CovalencePlugin
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
