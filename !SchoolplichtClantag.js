UI.AddDropdown( "Custom ClanTag", [ "Disabled", "schoolplicht"] );
UI.AddSliderInt( "Custom ClanTag Speed", 1, 10 );
var lasttime = 0;
function onRender( )
{
    var tag = UI.GetValue( "Script Items", "Custom ClanTag" );
    var speed = UI.GetValue( "Script Items", "Custom ClanTag Speed" );
    var time = parseInt((Globals.Curtime() * speed))
    if (time != lasttime)
    {
        if(tag == 0) { Local.SetClanTag(""); }
        if(tag == 1)
            {
            switch((time) % 53)
            {
                case 1: { Local.SetClanTag(" 5 "); break; }
                case 2: { Local.SetClanTag(" s "); break; }
                case 3: { Local.SetClanTag(" s< "); break; }
                case 4: { Local.SetClanTag(" sc "); break; }
                case 5: { Local.SetClanTag(" sc|-| "); break; }
                case 6: { Local.SetClanTag(" sch "); break; }
                case 7: { Local.SetClanTag(" sch0 "); break; }
                case 8: { Local.SetClanTag(" scho "); break; }
                case 9: { Local.SetClanTag(" scho0 "); break; }
                case 10: { Local.SetClanTag(" schoo "); break; }
                case 11: { Local.SetClanTag(" schoo| "); break; }
                case 12: { Local.SetClanTag(" school "); break; }
                case 13: { Local.SetClanTag(" school|> "); break; }
                case 14: { Local.SetClanTag(" schoolp "); break; }
                case 15: { Local.SetClanTag(" schoolp| "); break; }
                case 16: { Local.SetClanTag(" schoolpl "); break; }
                case 17: { Local.SetClanTag(" schoolpl| "); break; }
                case 18: { Local.SetClanTag(" schoolpli "); break; }
                case 19: { Local.SetClanTag(" schoolpli< "); break; }
                case 20: { Local.SetClanTag(" schoolplic "); break; }
                case 21: { Local.SetClanTag(" schoolplic|-| "); break; }
                case 22: { Local.SetClanTag(" schoolplich "); break; }
                case 23: { Local.SetClanTag(" schoolplich✝ "); break; }
                case 24: { Local.SetClanTag(" schoolplicht "); break; }
                case 25: { Local.SetClanTag(" schoolplicht "); break; }
                case 26: { Local.SetClanTag(" schoolplicht "); break; }
                case 27: { Local.SetClanTag(" schoolplicht "); break; }
                case 28: { Local.SetClanTag(" schoolplich✝"); break; }
                case 29: { Local.SetClanTag(" schoolplich "); break; }
                case 30: { Local.SetClanTag(" schoolplic|-| "); break; }
                case 31: { Local.SetClanTag(" schoolplic "); break; }
                case 32: { Local.SetClanTag(" schoolpli< "); break; }
                case 33: { Local.SetClanTag(" schoolpli "); break; }
                case 34: { Local.SetClanTag(" schoolpl| "); break; }
                case 35: { Local.SetClanTag(" schoolpl "); break; }
                case 36: { Local.SetClanTag(" schoolp| "); break; }
                case 37: { Local.SetClanTag(" schoolp "); break; }
                case 38: { Local.SetClanTag(" school|> "); break; }
                case 39: { Local.SetClanTag(" school "); break; }
                case 40: { Local.SetClanTag(" schoo| "); break; }
                case 41: { Local.SetClanTag(" schoo "); break; }
                case 42: { Local.SetClanTag(" scho0 "); break; }
                case 43: { Local.SetClanTag(" scho "); break; }
                case 44: { Local.SetClanTag(" sch0 "); break; }
                case 45: { Local.SetClanTag(" sch "); break; }
                case 46: { Local.SetClanTag(" sc|-| "); break; }
                case 47: { Local.SetClanTag(" sc "); break; }
                case 48: { Local.SetClanTag(" s< "); break; }
                case 49: { Local.SetClanTag(" s "); break; }
                case 50: { Local.SetClanTag(" 5 "); break; }
                case 51: { Local.SetClanTag("  "); break; }
                case 52: { Local.SetClanTag("  "); break; }

              
            }
        }
    }
    lasttime = time;
}
Cheat.RegisterCallback("Draw", "onRender");


//Coded by Schoolplicht
//Discord: schoolplicht#0001