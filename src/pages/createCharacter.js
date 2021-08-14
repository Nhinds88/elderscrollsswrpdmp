import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { createCharacter } from "../utils/users"

const SecondPage = () => (
  <Layout>
    <div class='sheet-maindiv'>
      <input type="radio" name="attr_tab" class="sheet-tab sheet-tab1" value="1" title="Core" checked="checked" />
      <input type="radio" name="attr_tab" class="sheet-tab sheet-tab2" value="2" title="Attributes/Skills" />
      <input type="radio" name="attr_tab" class="sheet-tab sheet-tab3" value="3" title="Inventory" />
      <input type="radio" name="attr_tab" class="sheet-tab sheet-tab4" value="4" title="Spells" />
      <input type="radio" name="attr_tab" class="sheet-tab sheet-tab5" value="5" title="Traits" />
      <input type="radio" name="attr_tab" class="sheet-tab sheet-tab6" value="6" title="Notes" />
      <input type="radio" name="attr_tab" class="sheet-tab sheet-tab7" value="7" title="In-Play" />
      <input type="radio" name="attr_tab" class="sheet-tab sheet-tab8" value="8" title="Extra" />
      
      <div class="sheet-tab-content sheet-tab1">
        <h1 styles={{ textAlign: "center" }} >Character Info</h1>
          <div class='sheet-3colrow'>
            <div class="sheet-col">
            <label class='sheet-nameRankXp'>Name:</label>
                <input type="text" name="attr_name" />
                <label>Homeland:</label>
                <input type="text" name="attr_homeland" />
                <label>Race:</label>
                <input type="text" name="attr_race" /><br/>
                <label>Birthsign:</label>
                <input type="text" name="attr_birthsign" />
                <label class='sheet-nameRankXp'>Rank:</label>
                <select name='attr_rank' value='novice' class='sheet-rank'>
                    <option value='Novice'>Novice</option>
                    <option value='Seasoned'>Seasoned</option>
                    <option value='Veteran'>Veteran</option>
                    <option value='Heroic'>Heroic</option>
                    <option value='Legendary'>Legendary</option>
                </select>
                <label>XP:</label>
                <input type="number" name="attr_xp"/>
            </div>
            <div class="sheet-col">
              <table class='sheet-DStatsTable'>
                <thead>
                  <tr>
                    <th></th>
                    <th>Base</th>
                    <th>Mod</th>
                    <th>Armor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Pace:</th>
                    <td><input type="number" name="attr_pace" class="sheet-short" value="6" /></td>
                    <td><input type="number" name="attr_paceMod" class="sheet-short" value="0" /></td>
                  </tr>
                  <tr>
                    <th>Parry:</th>
                    <td><input type="number" name="attr_parry" class="sheet-short" value="((@{fighting}-((1 - @{fightingTrained}) * 4))/2)+2" disabled="true" /></td>
                    <td><input type="number" name="attr_parryMod" class="sheet-short" value="0" /></td>
                  </tr>
                  <tr>
                    <th>Toughness:</th>
                    <td><input type="number" name="attr_toughness" class="sheet-short" value="floor(((@{Vigor})/2)+2+@{toughnessmod}+@{toughnessarmor})" disabled="true" /></td>
                    <td><input type="number" name="attr_toughnessMod" class="sheet-short" value="0" /></td>
                    <td><input type="number" name="attr_toughnessarmor" class="sheet-short" value="@{totalarmor}" disabled="true" /></td>
                  </tr>
                  <tr>
                    <th>Charisma:</th>
                    <td><input type="number" name="attr_charisma" class="sheet-short" value="0" /></td>
                    <td><input type="number" name="attr_charismaMod" class="sheet-short" value="0" /></td>
                  </tr>
                  <tr>
                    <th></th>
                    <th>Total</th>
                    <th>Limit</th>
                    <th>Multiplier</th>
                  </tr>
                  <tr>
                    <th>Weight:</th>
                    <td>
                      <input type="number" name="attr_weighttotal" class="sheet-short" value="@{combatinvweight}+@{totalarmorweight}" disabled="true"/>
                    </td>
                    <td>
                      <input type="number" name="attr_weightlimit" class="sheet-short" value="@{strength}*@{weightmult}" disabled="true"/>
                    </td>
                    <td>
                      <input type="number" name="attr_weightmult" class="sheet-short" value="5"/>
                    </td>
                    <tr>
                      <th></th>
                      <th>Used</th>
                      <th>Total</th>
                    </tr>
                    <tr>
                      <th>Magicka:</th>    
                      <td><input type="number" name="attr_magickaUsed" class="sheet-short" value="0"/></td>
                      <td><input type="number" name="attr_magickaTotal" class="sheet-short" value="10"/></td>
                      </tr>      
                      <tr>
                        <th></th>
                        <th>Current</th>
                        <th>Max</th>
                      </tr>
                      <tr>
                        <th>Bennies</th>
                        <td><input type='number' name='attr_benny' value='3'/></td>
                        <td><input type='number' name='attr_benny_max' value='3'/></td>
                      </tr>
                    </tr>
                </tbody>
              </table>
              <table styles={{width: '100%'}}>
                <thead>
                    <tr>
                        <th styles={{width: '25%', textAlign: 'center'}}>Wounds</th>
                        <th styles={{width: '25%', textAlign: 'center'}}>Fatigue</th>
                    </tr>
                </thead>
                  <tbody>
                      <tr styles={{width: '100%'}}>
                          <td styles={{width: '50%', textAlign: 'center'}}><input type='number' name='attr_wound' value='0'/></td>
                          <td styles={{width: '50%', textAlign: 'center'}}><input type='number' name='attr_fatigue' value='0'/></td>
                      </tr>
                  </tbody>
                </table>
          </div>
            <div class="sheet-col">
              <h3 styles={{textAlign: "center"}}>Quick Macros</h3>
                <table>
                  <tr>
                      <td>WildCard Trait: </td>
                      <td>
                          <button type='roll' class='sheet-MacroButtons' name='roll_WCTrait' value='@{name} rolls a wildcard test [[{1d?{Die Type|0}!, 1d6!}kh1  + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]]'></button>
                      </td>
                  </tr>
                  <tr>
                      <td>WildCard Unskilled Test: </td>
                      <td>
                          <button type='roll' class='sheet-MacroButtons' name='roll_WCUnskilled' value='@{name} rolls a wildcard unskilled test [[{1d4!, 1d6!}kh1-2  + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]]'></button>
                      </td>
                  </tr>
                  <tr>
                      <td>Melee Damage: </td>
                      <td>
                          <button type='roll' class='sheet-MacroButtons' name='roll_MeleeDam' value='@{name} rolls melee damage! [[?{Number of Weapon Dice|1}d?{Weapon Die Size|4}! + 1d@{strength}![Strength] + ?{Modifier IE: -2 or 2)|0}[Modifier] + ?{Raise on attack roll? (1 for yes)|0}d6[Raise]]]'></button>
                      </td>
                  </tr>
                  <tr>
                      <td>Ranged Damage: </td>
                      <td>
                            <button type='roll' class='sheet-MacroButtons' name='roll_RangedDam' value='@{name} rolls ranged damage! [[?{Number of Weapon Dice|1}d?{Weapon Die Size|4}! + ?{Modifier IE: -2 or 2)|0}[Modifier] + ?{Raise on attack roll? (1 for yes)|0}d6[Raise]]]'></button>
                      </td>
                  </tr>
                  <tr>
                      <td>Strength Damage: </td>
                      <td>
                          <button type='roll' class='sheet-MacroButtons' name='roll_StrengthDam' value='@{name} rolls strength damage! [[1d@{Strength}! + ?{Modifier IE: -2 or 2)|0}[Modifier] + ?{Raise on attack roll? (1 for yes)|0}d6[Raise]]]'></button>
                      </td>
                  </tr>
                  <tr>
                      <td>Misc Rolls</td>
                      <td>
                          <button type='roll' class='sheet-MacroButtons' name='roll_Misc' value='@{name} rolls a misc roll [[?{Number of dice|0}d?{Size of Dice|0} + ?{Modifier IE: -2 or 2)|0}[Modifier]]]'></button>
                      </td>
                  </tr>
                  <tr>
                      <td>Misc Rolls (Exploding)</td>
                      <td>
                          <button type='roll' class='sheet-MacroButtons' name='roll_MiscExp' value='@{name} rolls an exploding misc roll [[?{Number of dice|0}d?{Size of Dice|0}! + ?{Modifier IE: -2 or 2)|0}[Modifier]]]'></button>
                      </td>
                  </tr>
                  <tr>
                      <td>Run</td>
                      <td><button type='roll' name='roll_run' value='@{name} runs! [[1d?{Running Die Size|6} + ?{Modifier IE: -2 or 2|0}}[Modifier] - @{wound}[Wounds]]]'></button> </td>
                  </tr>
                  <tr>
                      <td>Raise Calculator</td>
                      <td><button type='roll' name='roll_raiseCalc' value='[[floor((?{Number Rolled|0}-?{Target Number|4})/4)]] Raises'></button> </td>
                  </tr>
                  <tr>
                      <td>Retrieve Arrows</td>
                      <td><button type='roll' name='roll_retrieveArrows' value='/em retrieves [[{?{Number of Arrows}d2}>2]] arrows'></button></td>
                      
                  </tr>
                </table>
            </div>
          </div>
      </div>
    
      <div class="sheet-tab-content sheet-tab2">
        <h1 styles={{textAlign: "center"}}>Attributes and Skills</h1>
          <div class='sheet-2colrow'>
            <div class='sheet-col'>
              <table class='sheet-DStatsTable' border="1" styles={{width: "300px"}}>
                <tr>
                    <th>Trained?</th>
                    <th>Skill:</th>
                    <th>d4</th>
                    <th>d6</th>
                    <th>d8</th>
                    <th>d10</th>
                    <th>d12</th>
                    <th></th>
                    <th>Mod</th>
                    <th>Roll</th>
                </tr>
                <tr styles={{backgroundColor: "LawnGreen"}}>
                    <td styles={{textAlign: "right"}}>
                      <input type='checkbox' name='attr_boatingTrained' value='1' class='sheet-trainedchk'/>
                    </td>
                    <td><b>Boating:</b></td>
                    <td><input type="radio" name="attr_boating" value="4!" checked="checked" /></td>
                    <td><input type="radio" name="attr_boating" value="6!" /></td>
                    <td><input type="radio" name="attr_boating" value="8!" /></td>
                    <td><input type="radio" name="attr_boating" value="10!" /></td>
                    <td><input type="radio" name="attr_boating" value="12!" /></td>
                    <td><b>+</b></td>
                    <td><input type="number" class="sheet-short" styles={{width: "35px"}} name="attr_boatingmod" value="0"/></td>
                    <td><button type='roll' name='roll_Boating' value='/em rolls a boating test
    !power --whisper| --name|@{name}&#39;s Boating Check --Result|[[{1d@{boating}+@{boatingmod}, 1d6!}kh1 - ((1 - @{boatingTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
                </tr>
                <tr styles={{backgroundColor: "LawnGreen"}}>
                    <td styles={{textAlign: "right"}}><input type='checkbox' name='attr_fightingTrained' value='1' class='sheet-trainedchk'/></td>
                    <td><b>Fighting:</b></td>
                    <td><input type="radio" name="attr_fighting" value="4!" checked="checked" /></td>
                    <td><input type="radio" name="attr_fighting" value="6!" /></td>
                    <td><input type="radio" name="attr_fighting" value="8!" /></td>
                    <td><input type="radio" name="attr_fighting" value="10!" /></td>
                    <td><input type="radio" name="attr_fighting" value="12!" /></td>
                    <td><b>+</b></td>
                    <td><input type="number" class="sheet-short" styles={{width: "35px"}} name="attr_fightingmod" value="0"/></td>
                    <td><button type='roll' name='roll_Fighting' value='/em rolls a fighting test
    !power --name|@{name}&#39;s Fighting Check --Result|[[{1d@{fighting}+@{fightingmod}, 1d6!}kh1 - ((1 - @{fightingTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
                </tr>
                <tr styles={{backgroundColor: "LawnGreen"}}>
                    <td styles={{textAlign: "right"}}><input type='checkbox' name='attr_lockpickingTrained' value='1' class='sheet-trainedchk'/></td>
                    <td><b>Lockpicking:</b></td>
                    <td><input type="radio" name="attr_lockpicking" value="4!" checked="checked" /></td>
                    <td><input type="radio" name="attr_lockpicking" value="6!" /></td>
                    <td><input type="radio" name="attr_lockpicking" value="8!" /></td>
                    <td><input type="radio" name="attr_lockpicking" value="10!" /></td>
                    <td><input type="radio" name="attr_lockpicking" value="12!" /></td>
                    <td><b>+</b></td>
                    <td><input type="number" class="sheet-short" styles={{width: "35px"}} name="attr_lockpickingmod" value="0"/></td>
                    <td><button type='roll' name='roll_Lockpicking' value='/em rolls a lockpicking test
    !power --whisper| --name|@{name}&#39;s Lockpicking Check --Result|[[{1d@{lockpicking}+@{lockpickingmod}, 1d6!}kh1 - ((1 - @{lockpickingTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]'></button></td>
                </tr>
                <tr styles={{backgroundColor: "LawnGreen"}}>
                    <td styles={{textAlign: "right"}}><input type='checkbox' name='attr_ridingTrained' value='1' class='sheet-trainedchk'/></td>
                    <td><b>Riding:</b></td>
                    <td><input type="radio" name="attr_riding" value="4!" checked="checked" /></td>
                    <td><input type="radio" name="attr_riding" value="6!" /></td>
                    <td><input type="radio" name="attr_riding" value="8!" /></td>
                    <td><input type="radio" name="attr_riding" value="10!" /></td>
                    <td><input type="radio" name="attr_riding" value="12!" /></td>
                    <td><b>+</b></td>
                    <td><input type="number" class="sheet-short" styles={{width: "35px"}} name="attr_ridingmod" value="0"/></td>
                    <td><button type='roll' name='roll_Riding' value='/em rolls a riding test
    !power --whisper| --name|@{name}&#39;s Riding Check --Result|[[{1d@{riding}+@{ridingmod}, 1d6!}kh1 - ((1 - @{ridingTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]'></button></td>
                </tr>
                <tr styles={{backgroundColor: "LawnGreen"}}>
                    <td styles={{textAlign: "right"}}><input type='checkbox' name='attr_shootingTrained' value='1' class='sheet-trainedchk'/></td>
                    <td><b>Shooting:</b></td>
                    <td><input type="radio" name="attr_shooting" value="4!" checked="checked" /></td>
                    <td><input type="radio" name="attr_shooting" value="6!" /></td>
                    <td><input type="radio" name="attr_shooting" value="8!" /></td>
                    <td><input type="radio" name="attr_shooting" value="10!" /></td>
                    <td><input type="radio" name="attr_shooting" value="12!" /></td>
                    <td><b>+</b></td>
                    <td><input type="number" class="sheet-short" styles={{width: "35px"}} name="attr_shootingmod" value="0"/></td>
                    <td><button type='roll' name='roll_shooting' value='/em rolls a shooting test
    !power --name|@{name}&#39;s Shooting Check --Result|[[{1d@{shooting}+@{shootingmod}, 1d6!}kh1 - ((1 - @{shootingTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]'></button></td>
                </tr>
                <tr styles={{backgroundColor: "LawnGreen"}}>
                    <td styles={{textAlign: "right"}}><input type='checkbox' name='attr_stealthTrained' value='1' class='sheet-trainedchk'/></td>
                    <td><b>Stealth:</b></td>
                    <td><input type="radio" name="attr_stealth" value="4!" checked="checked" /></td>
                    <td><input type="radio" name="attr_stealth" value="6!" /></td>
                    <td><input type="radio" name="attr_stealth" value="8!" /></td>
                    <td><input type="radio" name="attr_stealth" value="10!" /></td>
                    <td><input type="radio" name="attr_stealth" value="12!" /></td>
                    <td><b>+</b></td>
                    <td><input type="number" class="sheet-short" styles={{width: "35px"}} name="attr_stealthmod" value="0"/></td>
                    <td><button type='roll' name='roll_Stealth' value='/em rolls a stealth test
    !power --whisper| --name|@{name}&#39;s Stealth Check --Result|[[{1d@{stealth}+@{stealthmod}, 1d6!}kh1 - ((1 - @{stealthTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
                </tr>
                <tr styles={{backgroundColor: "LawnGreen"}}>
                    <td styles={{textAlign: "right"}}><input type='checkbox' name='attr_swimmingTrained' value='1' class='sheet-trainedchk'/></td>
                    <td><b>Swimming:</b></td>
                    <td><input type="radio" name="attr_swimming" value="4!" checked="checked" /></td>
                    <td><input type="radio" name="attr_swimming" value="6!" /></td>
                    <td><input type="radio" name="attr_swimming" value="8!" /></td>
                    <td><input type="radio" name="attr_swimming" value="10!" /></td>
                    <td><input type="radio" name="attr_swimming" value="12!" /></td>
                    <td><b>+</b></td>
                    <td><input type="number" class="sheet-short" styles={{width: "35px"}} name="attr_swimmingmod" value="0"/></td>
                    <td><button type='roll' name='roll_Swimming' value='/em rolls a swimming test
    !power --whisper| --name|@{name}&#39;s Swimming Check --Result|[[{1d@{swimming}+@{swimmingmod}, 1d6!}kh1 - ((1 - @{swimmingTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
                </tr>
                <tr styles={{backgroundColor: "LawnGreen"}}>
                    <td styles={{textAlign: "right"}}><input type='checkbox' name='attr_throwingTrained' value='1' class='sheet-trainedchk'/></td>
                    <td><b>Throwing:</b></td>
                    <td><input type="radio" name="attr_throwing" value="4!" checked="checked" /></td>
                    <td><input type="radio" name="attr_throwing" value="6!" /></td>
                    <td><input type="radio" name="attr_throwing" value="8!" /></td>
                    <td><input type="radio" name="attr_throwing" value="10!" /></td>
                    <td><input type="radio" name="attr_throwing" value="12!" /></td>
                    <td><b>+</b></td>
                    <td><input type="number" class="sheet-short" styles={{width: "35px"}} name="attr_throwingmod" value="0"/></td>
                    <td><button type='roll' name='roll_Throwing' value='/em rolls a throwing test
    !power --whisper| --name|@{name}&#39;s Throwing Check --Result|[[{1d@{throwing}+@{throwingmod}, 1d6!}kh1 - ((1 - @{throwingTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
                </tr>
                <tr styles={{backgroundColor: "deepskyblue"}}>
                    <td styles={{textAlign: "right"}}><input type='checkbox' name='attr_gamblingTrained' value='1' class='sheet-trainedchk'/></td>
                    <td><b>Gambling:</b></td>
                    <td><input type="radio" name="attr_gambling" value="4!" checked="checked" /></td>
                    <td><input type="radio" name="attr_gambling" value="6!" /></td>
                    <td><input type="radio" name="attr_gambling" value="8!" /></td>
                    <td><input type="radio" name="attr_gambling" value="10!" /></td>
                    <td><input type="radio" name="attr_gambling" value="12!" /></td>
                    <td><b>+</b></td>
                    <td><input type="number" class="sheet-short" styles={{width: "35px"}} name="attr_gamblingmod" value="0"/></td>
                    <td><button type='roll' name='roll_Gambling' value='/em rolls a gambling test
    !power --whisper| --name|@{name}&#39;s Gambling Check --Result|[[{1d@{gambling}+@{gamblingmod}, 1d6!}kh1 - ((1 - @{gamblingTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
                </tr>
                <tr styles={{backgroundColor: "deepskyblue"}}>
                    <td styles={{textAlign: "right"}}><input type='checkbox' name='attr_healingTrained' value='1' class='sheet-trainedchk'/></td>
                    <td><b>Healing:</b></td>
                    <td><input type="radio" name="attr_healing" value="4!" checked="checked" /></td>
                    <td><input type="radio" name="attr_healing" value="6!" /></td>
                    <td><input type="radio" name="attr_healing" value="8!" /></td>
                    <td><input type="radio" name="attr_healing" value="10!" /></td>
                    <td><input type="radio" name="attr_healing" value="12!" /></td>
                    <td><b>+</b></td>
                    <td><input type="number" class="sheet-short" styles={{width: "35px"}} name="attr_healingmod" value="0"/></td>
                    <td><button type='roll' name='roll_Healing' value='/em rolls a healing test
    !power --name|@{name}&#39;s Healing Check --Result|[[{1d@{healing}+@{healingmod}, 1d6!}kh1 - ((1 - @{healingTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
                </tr>
                <tr styles={{backgroundColor: "deepskyblue"}}>
                    <td styles={{textAlign: "right"}}><input type='checkbox' name='attr_investigationTrained' value='1' class='sheet-trainedchk'/></td>
                    <td><b>Investigation:</b></td>
                    <td><input type="radio" name="attr_investigation" value="4!" checked="checked" /></td>
                    <td><input type="radio" name="attr_investigation" value="6!" /></td>
                    <td><input type="radio" name="attr_investigation" value="8!" /></td>
                    <td><input type="radio" name="attr_investigation" value="10!" /></td>
                    <td><input type="radio" name="attr_investigation" value="12!" /></td>
                    <td><b>+</b></td>
                    <td><input type="number" class="sheet-short" styles={{width: "35px"}} name="attr_investigationmod" value="0"/></td>
                    <td><button type='roll' name='roll_Investigation' value='/em rolls an investigation test
    !power --whisper| --name|@{name}&#39;s Investigation Check --Result|[[{1d@{investigation}+@{investigationmod}, 1d6!}kh1 - ((1 - @{lockpickingTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
                </tr>
                <tr styles={{backgroundColor: "deepskyblue"}}>
                    <td styles={{textAlign: "right"}}><input type='checkbox' name='attr_noticeTrained' value='1' class='sheet-trainedchk'/></td>
                    <td><b>Notice:</b></td>
                    <td><input type="radio" name="attr_notice" value="4!" checked="checked" /></td>
                    <td><input type="radio" name="attr_notice" value="6!" /></td>
                    <td><input type="radio" name="attr_notice" value="8!" /></td>
                    <td><input type="radio" name="attr_notice" value="10!" /></td>
                    <td><input type="radio" name="attr_notice" value="12!" /></td>
                    <td><b>+</b></td>
                    <td><input type="number" class="sheet-short" styles={{width: "35px"}} name="attr_noticemod" value="0"/></td>
                    <td><button type='roll' name='roll_Notice' value='/em rolls a notice test
    !power --whisper| --name|@{name}&#39;s Notice Check --Result|[[{1d@{notice}+@{noticemod}, 1d6!}kh1 - ((1 - @{noticeTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
                </tr>
                <tr styles="background-color:deepskyblue;">
                    <td styles={{textAlign: "right"}}><input type='checkbox' name='attr_repairTrained' value='1' class='sheet-trainedchk'/></td>
                    <td><b>Repair:</b></td>
                    <td><input type="radio" name="attr_repair" value="4!" checked="checked" /></td>
                    <td><input type="radio" name="attr_repair" value="6!" /></td>
                    <td><input type="radio" name="attr_repair" value="8!" /></td>
                    <td><input type="radio" name="attr_repair" value="10!" /></td>
                    <td><input type="radio" name="attr_repair" value="12!" /></td>
                    <td><b>+</b></td>
                    <td><input type="number" class="sheet-short" styles={{width: "35px"}} name="attr_repairmod" value="0"/></td>
                    <td><button type='roll' name='roll_Repair' value='/em rolls a repair test
    !power --name|@{name}&#39;s Repair Check --Result|[[{1d@{repair}+@{repairmod}, 1d6!}kh1 - ((1 - @{repairTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
                </tr>
                <tr styles={{backgroundColor: "deepskyblue"}}>
                    <td styles={{textAlign: "right"}}><input type='checkbox' name='attr_streetwiseTrained' value='1' class='sheet-trainedchk'/></td>
                    <td><b>Streetwise:</b></td>
                    <td><input type="radio" name="attr_streetwise" value="4!" checked="checked" /></td>
                    <td><input type="radio" name="attr_streetwise" value="6!" /></td>
                    <td><input type="radio" name="attr_streetwise" value="8!" /></td>
                    <td><input type="radio" name="attr_streetwise" value="10!" /></td>
                    <td><input type="radio" name="attr_streetwise" value="12!" /></td>
                    <td><b>+</b></td>
                    <td><input type="number" class="sheet-short" styles={{width: "35px"}} name="attr_streetwisemod" value="0"/></td>
                    <td><button type='roll' name='roll_Streetwise' value='/em rolls a streetwise test
    !power --whisper| --name|@{name}&#39;s Streetwise Check --Result|[[{1d@{streetwise}+@{streetwisemod}, 1d6!}kh1 - ((1 - @{streetwiseTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
                </tr>
                <tr styles={{backgroundColor: "deepskyblue"}}>
                    <td styles={{textAlign: "right"}}><input type='checkbox' name='attr_survivalTrained' value='1' class='sheet-trainedchk'/></td>
                    <td><b>Survival:</b></td>
                    <td><input type="radio" name="attr_survival" value="4!" checked="checked" /></td>
                    <td><input type="radio" name="attr_survival" value="6!" /></td>
                    <td><input type="radio" name="attr_survival" value="8!" /></td>
                    <td><input type="radio" name="attr_survival" value="10!" /></td>
                    <td><input type="radio" name="attr_survival" value="12!" /></td>
                    <td><b>+</b></td>
                    <td><input type="number" class="sheet-short" styles={{width: "35px"}} name="attr_survivalmod" value="0"/></td>
                    <td><button type='roll' name='roll_Survival' value='/em rolls a survival test
    !power --whisper| --name|@{name}&#39;s Survival Check --Result|[[{1d@{survival}+@{survivalmod}, 1d6!}kh1 - ((1 - @{survivalTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
                </tr>
                <tr styles={{backgroundColor: "deepskyblue"}}>
                    <td styles={{textAlign: "right"}}><input type='checkbox' name='attr_tauntTrained' value='1' class='sheet-trainedchk'/></td>
                    <td><b>Taunt:</b></td>
                    <td><input type="radio" name="attr_taunt" value="4!" checked="checked" /></td>
                    <td><input type="radio" name="attr_taunt" value="6!" /></td>
                    <td><input type="radio" name="attr_taunt" value="8!" /></td>
                    <td><input type="radio" name="attr_taunt" value="10!" /></td>
                    <td><input type="radio" name="attr_taunt" value="12!" /></td>
                    <td><b>+</b></td>
                    <td><input type="number" class="sheet-short" styles={{width: "35px"}} name="attr_tauntmod" value="0"/></td>
                    <td><button type='roll' name='roll_Taunt' value='/em rolls a taunt test
    !power --whisper| --name|@{name}&#39;s Taunt Check --Result|[[{1d@{taunt}+@{tauntmod}, 1d6!}kh1 - ((1 - @{tauntTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
                </tr>
                <tr styles={{backgroundColor: "deepskyblue"}}>
                    <td styles={{textAlign: "right"}}><input type='checkbox' name='attr_trackingTrained' value='1' class='sheet-trainedchk'/></td>
                    <td><b>Tracking:</b></td>
                    <td><input type="radio" name="attr_tracking" value="4!" checked="checked" /></td>
                    <td><input type="radio" name="attr_tracking" value="6!" /></td>
                    <td><input type="radio" name="attr_tracking" value="8!" /></td>
                    <td><input type="radio" name="attr_tracking" value="10!" /></td>
                    <td><input type="radio" name="attr_tracking" value="12!" /></td>
                    <td><b>+</b></td>
                    <td><input type="number" class="sheet-short" styles={{width: "35px"}} name="attr_trackingmod" value="0"/></td>
                    <td><button type='roll' name='roll_Tracking' value='/em rolls a tracking test
    !power --whisper| --name|@{name}&#39;s Tracking Check --Result|[[{1d@{tracking}+@{trackingmod}, 1d6!}kh1 - ((1 - @{trackingTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
                </tr>
                <tr styles={{backgroundColor: "deepskyblue"}}>
                    <td styles={{textAlign: "right"}}><input type='checkbox' name='attr_conjurationTrained' value='1' class='sheet-trainedchk'/></td>
                    <td><b>Conjuration:</b></td>
                    <td><input type="radio" name="attr_conjuration" value="4!" checked="checked" /></td>
                    <td><input type="radio" name="attr_conjuration" value="6!" /></td>
                    <td><input type="radio" name="attr_conjuration" value="8!" /></td>
                    <td><input type="radio" name="attr_conjuration" value="10!" /></td>
                    <td><input type="radio" name="attr_conjuration" value="12!" /></td>
                    <td><b>+</b></td>
                    <td><input type="number" class="sheet-short" styles={{width: "35px"}} name="attr_conjurationmod" value="0"/></td>
                    <td><button type='roll' name='roll_Conjuration' value='/em rolls a Conjuration test
    !power --whisper| --name|@{name}&#39;s Conjuration Check --Result|[[{1d@{conjuration}+@{conjurationmod}, 1d6!}kh1 - ((1 - @{conjurationTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
                </tr>
                <tr styles={{backgroundColor: "deepskyblue"}}>
                    <td styles={{textAlign: "right"}}><input type='checkbox' name='attr_illusionTrained' value='1' class='sheet-trainedchk'/></td>
                    <td><b>Illusion:</b></td>
                    <td><input type="radio" name="attr_illusion" value="4!" checked="checked" /></td>
                    <td><input type="radio" name="attr_illusion" value="6!" /></td>
                    <td><input type="radio" name="attr_illusion" value="8!" /></td>
                    <td><input type="radio" name="attr_illusion" value="10!" /></td>
                    <td><input type="radio" name="attr_illusion" value="12!" /></td>
                    <td><b>+</b></td>
                    <td><input type="number" class="sheet-short" styles={{width: "35px"}} name="attr_illusionmod" value="0"/></td>
                    <td><button type='roll' name='roll_Illusion' value='/em} rolls a Illusion test
    !power --whisper| --name|@{name}&#39;s Illusion Check --Result|[[{1d@{illusion}+@{illusionmod}, 1d6!}kh1 - ((1 - @{illusionTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
                </tr>
                <tr styles={{backgroundColor: "deepskyblue"}}>
                    <td styles={{textAlign: "right"}}><input type='checkbox' name='attr_mysticismTrained' value='1' class='sheet-trainedchk'/></td>
                    <td><b>Mysticism:</b></td>
                    <td><input type="radio" name="attr_mysticism" value="4!" checked="checked" /></td>
                    <td><input type="radio" name="attr_mysticism" value="6!" /></td>
                    <td><input type="radio" name="attr_mysticism" value="8!" /></td>
                    <td><input type="radio" name="attr_mysticism" value="10!" /></td>
                    <td><input type="radio" name="attr_mysticism" value="12!" /></td>
                    <td><b>+</b></td>
                    <td><input type="number" class="sheet-short" styles={{width: "35px"}} name="attr_mysticismmod" value="0"/></td>
                    <td><button type='roll' name='roll_Mysticism' value='/em rolls a Mysticism test
    !power --whisper| --name|@{name}&#39;s Mysticism Check --Result|[[{1d@{mysticism}+@{mysticismmod}, 1d6!}kh1 - ((1 - @{mysticismTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
                </tr>
                <tr styles={{backgroundColor: "gold"}}>
                    <td styles={{textAlign: "right"}}><input type='checkbox' name='attr_intimidationTrained' value='1' class='sheet-trainedchk'/></td>
                    <td><b>Intimidation:</b></td>
                    <td><input type="radio" name="attr_intimidation" value="4!" checked="checked" /></td>
                    <td><input type="radio" name="attr_intimidation" value="6!" /></td>
                    <td><input type="radio" name="attr_intimidation" value="8!" /></td>
                    <td><input type="radio" name="attr_intimidation" value="10!" /></td>
                    <td><input type="radio" name="attr_intimidation" value="12!" /></td>
                    <td><b>+</b></td>
                    <td><input type="number" class="sheet-short" styles={{width: "35px"}} name="attr_intimidationmod" value="0"/></td>
                    <td><button type='roll' name='roll_Intimidation' value='/em rolls an intimidation test
    !power --whisper| --name|@{name}&#39;s Intimidation Check --Result|[[{1d@{intimidation}+@{intimidationmod}, 1d6!}kh1 - ((1 - @{intimidationTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
                </tr>
                <tr styles={{backgroundColor: "gold"}}>
                    <td styles={{textAlign: "right"}}><input type='checkbox' name='attr_persuasionTrained' value='1' class='sheet-trainedchk'/></td>
                    <td><b>Persuasion:</b></td>
                    <td><input type="radio" name="attr_persuasion" value="4!" checked="checked" /></td>
                    <td><input type="radio" name="attr_persuasion" value="6!" /></td>
                    <td><input type="radio" name="attr_persuasion" value="8!" /></td>
                    <td><input type="radio" name="attr_persuasion" value="10!" /></td>
                    <td><input type="radio" name="attr_persuasion" value="12!" /></td>
                    <td><b>+</b></td>
                    <td><input type="number" class="sheet-short" styles={{width: "35px"}} name="attr_persuasionmod" value="0"/></td>
                    <td><button type='roll' name='roll_Persuasion' value='/em rolls a persuasion test
    !power --whisper| --name|@{name}&#39;s Persuasion Check --Result|[[{1d@{persuasion}+@{persuasionmod}, 1d6!}kh1 - ((1 - @{persuasionTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
                </tr>
                <tr styles={{backgroundColor: "gold"}}>
                    <td styles={{textAlign: "right"}}><input type='checkbox' name='attr_alterationTrained' value='1' class='sheet-trainedchk'/></td>
                    <td><b>Alteration:</b></td>
                    <td><input type="radio" name="attr_alteration" value="4!" checked="checked" /></td>
                    <td><input type="radio" name="attr_alteration" value="6!" /></td>
                    <td><input type="radio" name="attr_alteration" value="8!" /></td>
                    <td><input type="radio" name="attr_alteration" value="10!" /></td>
                    <td><input type="radio" name="attr_alteration" value="12!" /></td>
                    <td><b>+</b></td>
                    <td><input type="number" class="sheet-short" styles={{width: "35px"}} name="attr_alterationmod" value="0"/></td>
                    <td><button type='roll' name='roll_Alteration' value='/em rolls a Alteration test
    !power --whisper| --name|@{name}&#39;s Alteration Check --Result|[[{1d@{alteration}+@{alterationmod}, 1d6!}kh1 - ((1 - @{alterationTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
                </tr>
                <tr styles={{backgroundColor: "gold"}}>
                    <td styles={{textAlign: "right"}}><input type='checkbox' name='attr_destructionTrained' value='1' class='sheet-trainedchk'/></td>
                    <td><b>Destruction:</b></td>
                    <td><input type="radio" name="attr_destruction" value="4!" checked="checked" /></td>
                    <td><input type="radio" name="attr_destruction" value="6!" /></td>
                    <td><input type="radio" name="attr_destruction" value="8!" /></td>
                    <td><input type="radio" name="attr_destruction" value="10!" /></td>
                    <td><input type="radio" name="attr_destruction" value="12!" /></td>
                    <td><b>+</b></td>
                    <td><input type="number" class="sheet-short" styles={{width: "35px"}} name="attr_destructionmod" value="0"/></td>
                    <td><button type='roll' name='roll_Destruction' value='/em rolls a Destruction test
    !power --whisper| --name|@{name}&#39;s Destruction Check --Result|[[{1d@{destruction}+@{destructionmod}, 1d6!}kh1 - ((1 - @{destructionTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
                </tr>
                <tr styles={{backgroundColor: "gold"}}>
                    <td styles={{textAlign: "right"}}><input type='checkbox' name='attr_restorationTrained' value='1' class='sheet-trainedchk'/></td>
                    <td><b>Restoration:</b></td>
                    <td><input type="radio" name="attr_restoration" value="4!" checked="checked" /></td>
                    <td><input type="radio" name="attr_restoration" value="6!" /></td>
                    <td><input type="radio" name="attr_restoration" value="8!" /></td>
                    <td><input type="radio" name="attr_restoration" value="10!" /></td>
                    <td><input type="radio" name="attr_restoration" value="12!" /></td>
                    <td><b>+</b></td>
                    <td><input type="number" class="sheet-short" styles={{width: "35px"}} name="attr_restorationmod" value="0"/></td>
                    <td><button type='roll' name='roll_Restoration' value='/em rolls a Restoration test
    !power --whisper| --name|@{name}&#39;s Restoration Check --Result|[[{1d@{restoration}+@{restorationmod}, 1d6!}kh1 - ((1 - @{restorationTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
                </tr>
                <tr styles={{backgroundColor: "tomato"}}>
                    <td styles={{textAlign: "right"}}><input type='checkbox' name='attr_climbingTrained' value='1' class='sheet-trainedchk'/></td>
                    <td><b>Climbing:</b></td>
                    <td><input type="radio" name="attr_climbing" value="4!" checked="checked" /></td>
                    <td><input type="radio" name="attr_climbing" value="6!" /></td>
                    <td><input type="radio" name="attr_climbing" value="8!" /></td>
                    <td><input type="radio" name="attr_climbing" value="10!" /></td>
                    <td><input type="radio" name="attr_climbing" value="12!" /></td>
                    <td><b>+</b></td>
                    <td><input type="number" class="sheet-short" styles={{width: "35px"}} name="attr_climbingmod" value="0"/></td>
                    <td><button type='roll' name='roll_Climbing' value='/em rolls a climbing test
    !power --whisper| --name|@{name}&#39;s Streetwise Check --Result|[[{1d@{climbing}+@{climbingmod}, 1d6!}kh1 - ((1 - @{climbingTrained}) * 2)   + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
                </tr>
              </table>
            </div>
    
            <div class='sheet-col'>
              <table class='sheet-DStatsTable' border="1" styles={{width: "300px"}}>
                  <tr>
                      <th>Attribute</th>
                      <th>d4</th>
                      <th>d6</th>
                      <th>d8</th>
                      <th>d10</th>
                      <th>d12</th>
                      <th></th>
                      <th>Mod</th>
                      <th>Roll</th>
                  </tr>
                  <tr styles={{backgroundColor: "LawnGreen"}}>
                      <td><b>Agility:</b></td>
                      <td><input type="radio" name="attr_agility" value="4!" checked="checked" /></td>
                      <td><input type="radio" name="attr_agility" value="6!" /></td>
                      <td><input type="radio" name="attr_agility" value="8!" /></td>
                      <td><input type="radio" name="attr_agility" value="10!" /></td>
                      <td><input type="radio" name="attr_agility" value="12!" /></td>
                      <td><b>+</b></td>
                      <td><input type="number" class="sheet-short" styles={{width: "35px"}} name="attr_agilitymod" value="0"/></td>
                      <td><button type='roll' name='roll_Agility' value='!power --name|@{name}&#39;s Agility Check --Result|[[{1d@{agility}+@{agilitymod}, 1d6!}kh1  + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
                  </tr>
                  <tr styles={{backgroundColor: "deepskyblue"}}>
                      <td><b>Smarts:</b></td>
                      <td><input type="radio" name="attr_smarts" value="4!" checked="checked" /></td>
                      <td><input type="radio" name="attr_smarts" value="6!" /></td>
                      <td><input type="radio" name="attr_smarts" value="8!" /></td>
                      <td><input type="radio" name="attr_smarts" value="10!" /></td>
                      <td><input type="radio" name="attr_smarts" value="12!" /></td>
                      <td><b>+</b></td>
                      <td><input type="number" class="sheet-short" styles={{width: "35px"}} name="attr_smartsmod" value="0"/></td>
                      <td><button type='roll' name='roll_Smarts' value='!power --name|@{name}&#39;s Smarts Check --Result|[[{1d@{smarts}+@{smartsmod}, 1d6!}kh1  + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
                  </tr>
                  <tr styles={{backgroundColor: "gold"}}>
                      <td><b>Spirit:</b></td>
                      <td><input type="radio" name="attr_spirit" value="4!" checked="checked" /></td>
                      <td><input type="radio" name="attr_spirit" value="6!" /></td>
                      <td><input type="radio" name="attr_spirit" value="8!" /></td>
                      <td><input type="radio" name="attr_spirit" value="10!" /></td>
                      <td><input type="radio" name="attr_spirit" value="12!" /></td>
                      <td><b>+</b></td>
                      <td><input type="number" class="sheet-short" styles={{width: "35px"}} name="attr_spiritmod" value="0"/></td>
                      <td><button type='roll' name='roll_Spirit' value='!power --name|@{name}&#39;s Spirit Check --Result|[[{1d@{spirit}+@{spiritmod}, 1d6!}kh1  + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
                  </tr>
                  <tr styles={{backgroundColor: "tomato"}}>
                      <td><b>Strength:</b></td>
                      <td><input type="radio" name="attr_strength" value="4!" checked="checked" /></td>
                      <td><input type="radio" name="attr_strength" value="6!" /></td>
                      <td><input type="radio" name="attr_strength" value="8!" /></td>
                      <td><input type="radio" name="attr_strength" value="10!" /></td>
                      <td><input type="radio" name="attr_strength" value="12!" /></td>
                      <td><b>+</b></td>
                      <td><input type="number" class="sheet-short" styles={{width: "35px"}} name="attr_strengthmod" value="0"/></td>
                      <td><button type='roll' name='roll_Strength' value='!power --name|@{name}&#39;s Strength Check --Result|[[{1d@{strength}+@{strengthmod}, 1d6!}kh1  + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
                  </tr>
                  <tr styles={{backgroundColor: "orchid"}}>
                      <td><b>Vigor:</b></td>
                      <td><input type="radio" name="attr_vigor" value="4!" checked="checked" /></td>
                      <td><input type="radio" name="attr_vigor" value="6!" /></td>
                      <td><input type="radio" name="attr_vigor" value="8!" /></td>
                      <td><input type="radio" name="attr_vigor" value="10!" /></td>
                      <td><input type="radio" name="attr_vigor" value="12!" /></td>
                      <td><b>+</b></td>
                      <td><input type="number" class="sheet-short" styles="width: 35px;" name="attr_vigormod" value="0"/></td>
                      <td><button type='roll' name='roll_Vigor' value='!power --name|@{name}&#39;s Agility Check --Result|[[{1d@{vigor}+@{vigormod}, 1d6!}kh1  + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
                  </tr>
                </table>
                <fieldset class="repeating_skills">
                  <table class='sheet-DStatsTable' border="1" styles={{width: "300px"}}>
                      <tr>
                          <th>Trained?</th>
                          <th>Addl. Skill:</th>
                          <th>d4</th>
                          <th>d6</th>
                          <th>d8</th>
                          <th>d10</th>
                          <th>d12</th>
                          <th></th>
                          <th>Mod</th>
                          <th>Roll</th>
                      </tr>
                      <tr>
                          <td styles="text-align: right;"><input type='checkbox' name='attr_skillTrained' value='1' class='sheet-trainedchk'/></td>
                          <td><input type="text" name="attr_skillname" styles='width:120px;'/></td>
                          <td><input type="radio" name="attr_dtype" value="4!" checked="checked" /></td>
                          <td><input type="radio" name="attr_dtype" value="6!" /></td>
                          <td><input type="radio" name="attr_dtype" value="8!" /></td>
                          <td><input type="radio" name="attr_dtypeg" value="10!" /></td>
                          <td><input type="radio" name="attr_dtype" value="12!" /></td>
                          <td><b>+</b></td>
                          <td><input type="number" class="sheet-short" styles="width: 35px;" name="attr_dtypemod" value="0"/></td>
                          <td><button type='roll' name='roll_adtlroll' value='/em rolls a @{skillname} test
    !power --name|@{name}&#39;s @{skillname} Check --Result|[[{1d@{dtype}+@{dtypemod}, 1d6!}kh1 - ((1 - @{skillTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
                      </tr>
                  </table>
                </fieldset>
              </div>
          </div>
      </div>
      
      <div class="sheet-tab-content sheet-tab3">
        <h1 styles={{textAlign: "center"}}>Inventory</h1>
            <div>
                <h3 styles={{marginBottom: "10px"}}>Melee Weapons</h3>
                  <fieldset class="repeating_meleeweapon">
                    <table>
                        <tr>
                            <th styles={{textAlign: "left"}}>Name</th>
                            <th styles={{textAlign: "left"}}>Damage</th>
                            <th styles={{textAlign: "left"}}>Raise Die</th>
                        </tr>
                        <tr>
                            <td><input type="text" name="attr_meleename" styles={{width: '256px'}}/></td>
                            <td>
                                <input type="number" name="attr_dnum" styles={{width: '40px'}} value="1"/>
                                <select name="attr_dtype" class="dtype">
                                    <option value="4!">d4</option>
                                    <option value="6!">d6</option>
                                    <option value="8!">d8</option>
                                    <option value="10!">d10</option>
                                    <option value="12!">d12</option>
                                </select>
                                
                                <input type="number" name="attr_weaponmod" styles={{width: '40px'}} value="0"/>
                            </td>
                                <td>
                                    <select name="attr_draise" class="dtype">
                                        <option value="6!">d6</option>
                                        <option value="8!">d8</option>
                                    </select>
                                </td>
                                <td styles={{textAlign: 'left'}}><button type='roll' value='@{meleemacro}'></button></td>
                        </tr>
                    </table>
                    <div class="sheet-2colrow">
                        <div class='sheet-col'>
                            Notes<input type="checkbox" class="arrow" checked="checked" />
                                <div class="body">
                                    <textarea name="attr_meleenotes"></textarea>
                                </div>
                        </div>
                    </div>
                  </fieldset>
            </div>
        <hr/>
            <div>
                <h3 styles={{marginbottom: "10px"}}>Ranged Weapons</h3>
                  <fieldset class="repeating_rangedweapon">
                    <table>
                        <tr>
                            <th styles={{textAlign: "left"}}>Name</th>
                            <th styles={{textAlign: "left"}}>Damage</th>
                            <th styles={{textAlign: "left"}}>Range</th>
                            <th styles={{textAlign: "left"}}>Raise Die</th>
                        </tr>
                        <tr>
                            <td><input type="text" name="attr_rangedname" styles={{width: '256px'}}/></td>
                            <td>
                                <input type="number" name="attr_dnum" styles={{width: '40px'}} value="1"/>
                                <select name="attr_dtype" class="dtype">
                                    <option value="4!">d4</option>
                                    <option value="6!">d6</option>
                                    <option value="8!">d8</option>
                                    <option value="10!">d10</option>
                                    <option value="12!">d12</option>
                                </select>
                            +
                            <input type="number" name="attr_weaponmod" styles={{width: '40px'}} value="0"/>
                            </td>
                            <td><input type="text" name="attr_weaponrange" styles={{width: '127px'}}/></td>
                            <td>
                                <select name="attr_draise" class="dtype">
                                    <option value="6!">d6</option>
                                    <option value="8!">d8</option>
                                </select>
                            </td>
                            <td styles={{textAlign: 'left'}}><button type='roll' value='@{rangedmacro}'></button></td>
                        </tr>
                    </table>
                    <div class="sheet-2colrow">
                        <div class='sheet-col'>
                            Notes<input type="checkbox" class="arrow" checked="checked" />
                            <div class="body">
                                <textarea name="attr_rangednotes"></textarea>
                            </div>
                        </div>
                    </div>
                  </fieldset>
            </div>
        <hr/>
        <h2>Armor</h2>
        <table>
            <tr>
                <th>Location</th>
                <th>Name</th>
                <th>Armor</th>
                <th>Weight</th>
                <th>Notes</th>
                <th>Total Armor</th>
                <th>Total Weight</th>
            </tr>
            <tr>
                <td styles={{textAlign: 'right'}}>Head</td>
                <td><input type="text" name="attr_headarmorname"/></td>
                <td><input type="number" value="0" name="attr_headarmor"/></td>
                <td><input type="number" value="0" name="attr_headarmorweight"/></td>
                <td><input type="text" name="attr_headarmornote"/></td>
                <td><input type="number" name="attr_totalarmor" value="@{headarmor}+@{torsoarmor}+@{armsarmor}+@{legsarmor}+@{bodyarmor}" disabled="true"/></td>
                <td><input type="number" name="attr_totalarmorweight" disabled="true" value="@{headarmorweight}+@{torsoarmorweight}+@{armsarmorweight}+@{legsarmorweight}+@{bodyarmorweight}"/></td>
            </tr>
            <tr>
                <td styles={{textAlign: 'right'}}>Torso</td>
                <td><input type="text" name="attr_torsoarmorname"/></td>
                <td><input type="number" value="0" name="attr_torsoarmor"/></td>
                <td><input type="number" value="0" name="attr_torsoarmorweight"/></td>
                <td><input type="text" name="attr_torsoarmornote"/></td>
            </tr>
            <tr>
                <td styles={{textAlign: 'right'}}>Arms</td>
                <td><input type="text" name="attr_armsarmorname"/></td>
                <td><input type="number" value="0" name="attr_armsarmor"/></td>
                <td><input type="number" value="0" name="attr_armsarmorweight"/></td>
                <td><input type="text" name="attr_armsarmornote"/></td>
            </tr>
            <tr>
                <td styles={{textAlign: 'right'}}>Legs</td>
                <td><input type="text" name="attr_legsarmorname"/></td>
                <td><input type="number" value="0" name="attr_legsarmor"/></td>
                <td><input type="number" value="0" name="attr_legsarmorweight"/></td>
                <td><input type="text" name="attr_legsarmornote"/></td>
            </tr>
            <tr>
                <td styles={{textAlign: 'right'}}>Body</td>
                <td><input type="text" name="attr_bodyarmorname"/></td>
                <td><input type="number" value="0" name="attr_bodyarmor"/></td>
                <td><input type="number" value="0" name="attr_bodyarmorweight"/></td>
                <td><input type="text" name="attr_bodyarmornote"/></td>
            </tr>
        </table>
        <hr/>
        <div class='sheet-2colrow'>
                <div class='sheet-col'>
                    <h2>Combat Inventory</h2>
                    <table>
                        <tr>
                            <th styles={{textAlign: 'left', width:'200px'}}>Item</th>
                            <th styles={{textAlign: 'left', width: '127px'}}>Location</th>
                            <th styles={{textAlign: 'left', width:'3.5em'}}>Weight</th>
                        </tr>
                    </table>
                    <fieldset class="repeating_combatinv">
                      <table>
                          <tr>
                              <td><input type="text" name="attr_name" styles={{width: '200px', align: 'right'}}/></td>
                              <td><input type="text" name="attr_location" styles={{width: '127px'}}/></td>
                              <td><input type="number" name="attr_weight" class="sheet-short"/></td>
                          </tr>
                      </table>
                    </fieldset>
                    <b>Total Combat Inventory Weight:</b><input type="number" name="attr_combatinvweight" value="0"/>
                </div>
                <div class='sheet-col'>
                    <h2>Backpack Inventory</h2>
                    <table>
                        <tr>
                            <th styles={{textAlign: 'left', width:'200px'}}>Item</th>
                            <th styles={{textAlign: 'left', width:'3.5em'}}>Weight</th>
                        </tr>
                    </table>
                    <fieldset class="repeating_backpackinv">
                      <table>
                        <tr>
                            <td><input type="text" name="attr_name" styles={{width: '200px', align: 'right'}}/></td>
                            <td><input type="number" name="attr_weight" class="sheet-short"/></td>
                        </tr>
                      </table>
                    </fieldset>
                    <b>Total Backpack Inventory Weight:</b><input type="number" name="attr_backpackinvweight" value="0"/>
                </div>
        </div>
    </div>
    
      <div class="sheet-tab-content sheet-tab4">
        <h1 styles={{textAlign: "center"}}>Spells</h1>
        <div>
            <h2>Spell List</h2>
            <table>
                <tr>
                    <td styles={{textAlign: 'left', width: '256px'}}>Power</td>
                    <td styles={{textAlign: 'left', width: '127px'}}>Effect</td>
                    <td styles={{textAlign: 'left', width: '3.5em'}}>Drain</td>
                    <td styles={{textAlign: 'left', width: '127px'}}>Range</td>
                    <td styles={{textAlign: 'left', width: '127px'}}>Duration</td>
                    <td styles={{textAlign: 'left', width: '127px'}}>Page</td>
                </tr>
            </table>
            <fieldset class="repeating_spells">
                <table>
                <tr>
                    <td><input type="text" name="attr_power" styles={{width: '256px', align: 'right'}}/></td>
                    <td><input type="text" name="attr_effect" styles={{width: '127px', align: 'right'}}/></td>
                    <td><input type="number" name="attr_drain" class="sheet-short"/></td>
                    <td><input type="text" name="attr_range" styles={{width: '127px', align: 'right'}}/></td>
                    <td><input type="text" name="attr_duration" styles={{width: '127px', align: 'right'}}/></td>
                    <td><input type="text" name="attr_page" styles={{width: '127px', align: 'right'}}/></td>
                </tr>
                </table>
                <input type="checkbox" class="arrow" checked="checked" />
                    Spell Notes
                <div class="body">
                    <textarea name="attr_note" class='sheet-smalltextarea'></textarea>
                </div>
            </fieldset>
        </div>
    
    </div>
    
      <div class="sheet-tab-content sheet-tab5">
        <h1 styles={{textAlign: "center"}}>Traits</h1>
        <div class="sheet-2colrom">
            <div class="sheet-col sheet-skills">
                <h2>Hindrances</h2>
                <table>
                  <tr>
                    <td styles={{textAlign: 'left', width: '256px'}}>Name</td>
                    <td styles={{textAlign: 'left', width: '127px'}}>Page</td>
                  </tr>
                </table>
                <fieldset class="repeating_hindrances">
                  <table>
                    <tr>
                      <td><input type="text" name="attr_name" styles={{width: '256px', align: 'right'}}/></td>
                      <td><input type="text" name="attr_page" styles={{width: '127px', align: 'right'}}/></td>
                    </tr>
                  </table>
                </fieldset>
            </div>
            <div class="sheet-col sheet-skills">
              <h2>Edges</h2>
                <table>
                  <tr>
                    <td styles={{textAlign: 'left', width: '256px'}}>Name</td>
                    <td styles={{textAlign: 'left', width: '127px'}}>Page</td>
                  </tr>
                </table>
                <fieldset class="repeating_edges">
                  <table>
                    <tr>
                      <td><input type="text" name="attr_name" styles={{width: '256px', align: 'right'}}/></td>
                      <td><input type="text" name="attr_page" styles={{width: '127px', align: 'right'}}/></td>
                    </tr>
                  </table>
                </fieldset>
            </div>
        </div>
    </div>
    
      <div class="sheet-tab-content sheet-tab6">
        <h1 styles={{textAlign: "center"}}>Notes</h1>
        <hr/>
        <div>
            <h2>Combat Notes</h2>
            <textarea name="attr_combatnotes"></textarea>
        </div>
    </div>
    
      <div class="sheet-tab-content sheet-tab7">
        <h1 styles={{textAlign: "center"}}>In-Play</h1>
        Work in Progress
    </div>
    
      <div class="sheet-tab-content sheet-tab8">
        <h1 styles={{textAlign: "center"}}>Extra Character Sheet</h1>
        <h2 styles={{color: "red", textAlign: "center"}}><i>Do Not Use if Player Character!</i></h2>
        <hr/>
        <div class='sheet-4colrow'>
        <div class='sheet-col'>
          <table>
            <tr>
                <th>Skill</th>
                <th>Roll</th>
            </tr>
            <tr>
                <td>Boating</td>
                <td><button type='roll' name='roll_BoatingExtra' value='!power --whisper| --name|@{name} rolls a boating test --leftsub|Boating Check --rightsub|Extra --Result|[[1d@{boating}+@{boatingmod} - ((1 - @{boatingTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
            </tr>
            <tr>
                <td>Fighting</td>
                <td><button type='roll' name='roll_FightingExtra' value='!power --whisper| --name|@{name} rolls a Fighting test --leftsub|Fighting Check --rightsub|Extra --Result|[[1d@{fighting}+@{fightingmod} - ((1 - @{fightingTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
            </tr>
            <tr>
                <td>Lockpicking</td>
                <td><button type='roll' name='roll_LockpickingExtra' value='!power --whisper| --name|@{name} rolls a Lockpicking test --leftsub|Lockpicking Check --rightsub|Extra --Result|[[1d@{lockpicking}+@{lockpickingmod} - ((1 - @{lockpickingTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
            </tr>
            <tr>
                <td>Riding</td>
                <td><button type='roll' name='roll_RidingExtra' value='!power --whisper| --name|@{name} rolls a Riding test --leftsub|Riding Check --rightsub|Extra --Result|[[1d@{riding}+@{ridingmod} - ((1 - @{ridingTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
            </tr>
            <tr>
                <td>Shooting</td>
                <td><button type='roll' name='roll_ShootingExtra' value='!power --whisper| --name|@{name} rolls a Shooting test --leftsub|Shooting Check --rightsub|Extra --Result|[[1d@{shooting}+@{shootingmod} - ((1 - @{shootingTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
            </tr>
            <tr>
                <td>Stealth</td>
                <td><button type='roll' name='roll_StealthExtra' value='!power --whisper| --name|@{name} rolls a Stealth test --leftsub|Stealth Check --rightsub|Extra --Result|[[1d@{stealth}+@{stealthmod} - ((1 - @{stealthTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
            </tr>
            <tr>
                <td>Swimming</td>
                <td><button type='roll' name='roll_SwimmingExtra' value='!power --whisper| --name|@{name} rolls a Swimming test --leftsub|Swimming Check --rightsub|Extra --Result|[[1d@{swimming}+@{swimmingmod} - ((1 - @{swimmingTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
            </tr>
            <tr>
                <td>Throwing</td>
                <td><button type='roll' name='roll_ThrowingExtra' value='!power --whisper| --name|@{name} rolls a Throwing test --leftsub|Throwing Check --rightsub|Extra --Result|[[1d@{throwing}+@{throwingmod} - ((1 - @{throwingTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
            </tr>
            <tr>
                <td>Gambling</td>
                <td><button type='roll' name='roll_GamblingExtra' value='!power --whisper| --name|@{name} rolls a Gambling test --leftsub|Gambling Check --rightsub|Extra --Result|[[1d@{gambling}+@{gamblingmod} - ((1 - @{gamblingTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
            </tr>
            <tr>
                <td>Healing</td>
                <td><button type='roll' name='roll_HealingExtra' value='!power --whisper| --name|@{name} rolls a Healing test --leftsub|Healing Check --rightsub|Extra --Result|[[1d@{healing}+@{healingmod} - ((1 - @{healingTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
            </tr>
            <tr>
                <td>Investigation</td>
                <td><button type='roll' name='roll_InvestigationExtra' value='!power --whisper| --name|@{name} rolls a Investigation test --leftsub|Investigation Check --rightsub|Extra --Result|[[1d@{investigation}+@{investigationmod} - ((1 - @{investigationTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
            </tr>
            <tr>
                <td>Notice</td>
                <td><button type='roll' name='roll_NoticeExtra' value='!power --whisper| --name|@{name} rolls a Notice test --leftsub|Notice Check --rightsub|Extra --Result|[[1d@{notice}+@{noticemod} - ((1 - @{lockpickingTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
            </tr>
            <tr>
              <td>Repair</td>
              <td><button type='roll' name='roll_RepairExtra' value='!power --whisper| --name|@{name} rolls a Repair test --leftsub|Repair Check --rightsub|Extra --Result|[[1d@{repair}+@{repairmod} - ((1 - @{repairTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
          </tr>
          </table>
        </div>
        <div class='sheet-col'>
            <table>
              <tr>
                  <th>Skill</th>
                  <th>Roll</th>
              </tr>
              <tr>
                  <td>Streetwise</td>
                  <td><button type='roll' name='roll_StreetwiseExtra' value='!power --whisper| --name|@{name} rolls a Streetwise test --leftsub|Streetwise Check --rightsub|Extra --Result|[[1d@{streetwise}+@{streetwisemod} - ((1 - @{streetwiseTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
              </tr>
              <tr>
                  <td>Survival</td>
                  <td><button type='roll' name='roll_SurvivalExtra' value='!power --whisper| --name|@{name} rolls a Survival test --leftsub|Survival Check --rightsub|Extra --Result|[[1d@{survival}+@{survivalmod} - ((1 - @{survivalTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
              </tr>
              <tr>
                  <td>Taunt</td>
                  <td><button type='roll' name='roll_TauntExtra' value='!power --whisper| --name|@{name} rolls a Taunt test --leftsub|Taunt Check --rightsub|Extra --Result|[[1d@{taunt}+@{tauntgmod} - ((1 - @{lockpickingTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
              </tr>
              <tr>
                  <td>Tracking</td>
                  <td><button type='roll' name='roll_TrackingExtra' value='!power --whisper| --name|@{name} rolls a Tracking test --leftsub|Tracking Check --rightsub|Extra --Result|[[1d@{tracking}+@{trackingmod} - ((1 - @{trackingTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
              </tr>
              <tr>
                  <td>Conjuration</td>
                  <td><button type='roll' name='roll_ConjurationExtra' value='!power --whisper| --name|@{name} rolls a Conjuration test --leftsub|Conjuration Check --rightsub|Extra --Result|[[1d@{conjuration}+@{conjurationmod} - ((1 - @{conjurationTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
              </tr>
              <tr>
                  <td>Illusion</td>
                  <td><button type='roll' name='roll_IllusionExtra' value='!power --whisper| --name|@{name} rolls a Illusion test --leftsub|Illusion Check --rightsub|Extra --Result|[[1d@{illusion}+@{illusionmod} - ((1 - @{illusionTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
              </tr>
              <tr>
                  <td>Mysticism</td>
                  <td><button type='roll' name='roll_MysticismExtra' value='!power --whisper| --name|@{name} rolls a Mysticism test --leftsub|Mysticism Check --rightsub|Extra --Result|[[1d@{mysticism}+@{mysticismmod} - ((1 - @{mysticismTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
              </tr>
              <tr>
                  <td>Intimidation</td>
                  <td><button type='roll' name='roll_IntimidationExtra' value='!power --whisper| --name|@{name} rolls a Intimidation test --leftsub|Intimidation Check --rightsub|Extra --Result|[[1d@{intimidation}+@{intimidationmod} - ((1 - @{intimidationTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
              </tr>
              <tr>
                  <td>Persuasion</td>
                  <td><button type='roll' name='roll_PersuasionExtra' value='!power --whisper| --name|@{name} rolls a Persuasion test --leftsub|Persuasion Check --rightsub|Extra --Result|[[1d@{persuasion}+@{persuasionmod} - ((1 - @{persuasionTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
              </tr>
              <tr>
                  <td>Alteration</td>
                  <td><button type='roll' name='roll_AlterationExtra' value='!power --whisper| --name|@{name} rolls a Alteration test --leftsub|Alteration Check --rightsub|Extra --Result|[[1d@{alteration}+@{alterationmod} - ((1 - @{alterationTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
              </tr>
              <tr>
                  <td>Destruction</td>
                  <td><button type='roll' name='roll_DestructionExtra' value='!power --whisper| --name|@{name} rolls a Destruction test --leftsub|Destruction Check --rightsub|Extra --Result|[[1d@{destruction}+@{destructionmod} - ((1 - @{destructionTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
              </tr>
              <tr>
                  <td>Restoration</td>
                  <td><button type='roll' name='roll_RestorationExtra' value='!power --whisper| --name|@{name} rolls a Restoration test --leftsub|Restoration Check --rightsub|Extra --Result|[[1d@{restoration}+@{restorationmod} - ((1 - @{restorationTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
              </tr>
              <tr>
                  <td>Climbing</td>
                  <td><button type='roll' name='roll_ClimbingExtra' value='!power --whisper| --name|@{name} rolls a Climbing test --leftsub|Climbing Check --rightsub|Extra --Result|[[1d@{climbing}+@{climbingmod} - ((1 - @{climbingTrained}) * 2) + ?{Modifier IE: -2 or 2|0}[Modifier] - @{wound}[Wounds] - @{fatigue}[Fatigue]]]'></button></td>
              </tr>
            </table>
          </div>
        <div class='sheet-col'>
              <table>
                <tr>
                    <td>Melee Weapon 0</td>
                    <td>Roll</td>
                </tr>
                <tr>
                    <td><input type="text" class="sheet-short" name="attr_meleename_Extra0" disabled="True" value="@{repeating_meleeweapon_0_meleename}" /></td>
                    <td><button type="roll" value='!power --whisper| --name|@{name} attacks with their @{repeating_meleeweapon_0_meleename} --leftsub|Fighting Attack --rightsub|Extra --Attack|[[1d@{fighting} - ((1 - @{fightingTrained}) * 2) + ?{Attack Modifier|0}[Mod] - @{wound}[Wounds] - @{fatigue}[Fatigue]]] --Damage|[[@{repeating_meleeweapon_0_dnum}d@{repeating_meleeweapon_0_dtype} + @{repeating_meleeweapon_0_weaponmod} + 1d@{strength} + ?{Damage Modifier|0}[Mod]]] --Raise|[[1d@{repeating_meleeweapon_0_draise}]] --Notes|@{repeating_meleeweapon_0_meleenotes}'/></td>
                </tr>
                <tr>
                  <td>Melee Weapon 1</td>
                  <td>Roll</td>
                </tr>
                <tr>
                  <td><input type="text" class="sheet-short" name="attr_meleename_Extra1" disabled="True" value="@{repeating_meleeweapon_1_meleename}" /></td>
                  <td><button type="roll" value='!power --whisper| --name|@{name} attacks with their @{repeating_meleeweapon_1_meleename} --leftsub|Fighting Attack --rightsub|Extra --Attack|[[1d@{fighting} - ((1 - @{fightingTrained}) * 2) + ?{Attack Modifier|0}[Mod] - @{wound}[Wounds] - @{fatigue}[Fatigue]]] --Damage|[[@{repeating_meleeweapon_1_dnum}d@{repeating_meleeweapon_1_dtype} + @{repeating_meleeweapon_1_weaponmod} + 1d@{strength} + ?{Damage Modifier|0}[Mod]]] --Raise|[[1d@{repeating_meleeweapon_1_draise}]] --Notes|@{repeating_meleeweapon_1_meleenotes}'/></td>
                </tr>
                <tr>
                  <td>Melee Weapon 2</td>
                  <td>Roll</td>
                </tr>
                <tr>
                  <td><input type="text" class="sheet-short" name="attr_meleename_Extra2" disabled="True" value="@{repeating_meleeweapon_2_meleename}" /></td>
                  <td><button type="roll" value='!power --whisper| --name|@{name} attacks with their @{repeating_meleeweapon_2_meleename} --leftsub|Fighting Attack --rightsub|Extra Attack|[[1d@{fighting} - ((1 - @{fightingTrained}) * 2) + ?{Attack Modifier|0}[Mod] - @{wound}[Wounds] - @{fatigue}[Fatigue]]] --Damage|[[@{repeating_meleeweapon_2_dnum}d@{repeating_meleeweapon_2_dtype} + @{repeating_meleeweapon_2_weaponmod} + 1d@{strength} + ?{Damage Modifier|0}[Mod]]] --Raise|[[1d@{repeating_meleeweapon_2_draise}]] --Notes|@{repeating_meleeweapon_2_meleenotes}'/></td>
                </tr>
                <tr>
                  <td>Melee Weapon 3</td>
                  <td>Roll</td>
                </tr>
                <tr>
                  <td><input type="text" class="sheet-short" name="attr_meleename_Extra3" disabled="True" value="@{repeating_meleeweapon_3_meleename}" /></td>
                  <td><button type="roll" value='!power --whisper| --name|@{name} attacks with their @{repeating_meleeweapon_3_meleename} --leftsub|Fighting Attack --rightsub|Extra --Attack|[[1d@{fighting} - ((1 - @{fightingTrained}) * 2) + ?{Attack Modifier|0}[Mod] - @{wound}[Wounds] - @{fatigue}[Fatigue]]] --Damage|[[@{repeating_meleeweapon_3_dnum}d@{repeating_meleeweapon_3_dtype} + @{repeating_meleeweapon_3_weaponmod} + 1d@{strength} + ?{Damage Modifier|0}[Mod]]] --Raise|[[1d@{repeating_meleeweapon_3_draise}]] --Notes|@{repeating_meleeweapon_3_meleenotes}'/></td>
                </tr>
                <tr>
                    <td>Ranged Weapon 0</td>
                    <td>Shooting</td>
                    <td>Throwing</td>
                </tr>
                <tr>
                  <td><input type="text" class="sheet-short" name="attr_rangedname_Extra0" disabled="True" value="@{repeating_rangedweapon_0_rangedname}" /></td>
                  <td><button type="roll" value='!power --whisper| --name|@{name} shoots with their @{repeating_rangedweapon_0_rangedname} --leftsub|Shooting Attack --rightsub|Extra --Attack|[[1d@{shooting} - ((1 - @{shootingTrained}) * 2) + ?{Attack Modifier|0}[Mod] - @{wound}[Wounds] - @{fatigue}[Fatigue]]] --Damage|[[@{repeating_rangedweapon_0_dnum}d@{repeating_rangedweapon_0_dtype} + @{repeating_rangedweapon_0_weaponmod} + ?{Damage Modifier|0}[Mod]]] --Raise|[[1d@{repeating_rangedweapon_0_draise}]] --Range|@{repeating_rangedweapon_0_weaponrange} --Notes|@{repeating_rangedweapon_0_rangednotes}'/></td>
                  <td><button type="roll" value='!power --whisper| --name|@{name} Throws their @{repeating_rangedweapon_0_rangedname} --leftsub|Throwing Attack --rightsub|Extra --Attack|[[1d@{throwing} - ((1 - @{throwingTrained}) * 2) + ?{Attack Modifier|0}[Mod] - @{wound}[Wounds] - @{fatigue}[Fatigue]]] --Damage|[[@{repeating_rangedweapon_0_dnum}d@{repeating_rangedweapon_0_dtype} + @{repeating_rangedweapon_0_weaponmod} + ?{Damage Modifier|0}[Mod]]] --Raise|[[1d@{repeating_rangedweapon_0_draise}]] --Range|@{repeating_rangedweapon_0_weaponrange} --Notes|@{repeating_rangedweapon_0_rangednotes}' /></td>
                </tr>
                <tr>
                  <td>Ranged Weapon 1</td>
                  <td>Shooting</td>
                  <td>Throwing</td>
                </tr>
                <tr>
                  <td><input type="text" class="sheet-short" name="attr_rangedname_Extra1" disabled="True" value="@{repeating_rangedweapon_1_rangedname}" /></td>
                  <td><button type="roll" value='!power --whisper| --name|@{name} shoots with their @{repeating_rangedweapon_1_rangedname} --leftsub|Shooting Attack --rightsub|Extra --Attack|[[1d@{shooting} - ((1 - @{shootingTrained}) * 2) + ?{Attack Modifier|0}[Mod] - @{wound}[Wounds] - @{fatigue}[Fatigue]]] --Damage|[[@{repeating_rangedweapon_1_dnum}d@{repeating_rangedweapon_0_dtype} + @{repeating_rangedweapon_1_weaponmod} + ?{Damage Modifier|0}[Mod]]] --Raise|[[1d@{repeating_rangedweapon_1_draise}]] --Range|@{repeating_rangedweapon_1_weaponrange} --Notes|@{repeating_rangedweapon_1_rangednotes}'/></td>
                  <td><button type="roll" value='!power --whisper| --name|@{name} throws their @{repeating_rangedweapon_1_rangedname} --leftsub|Throwing Attack --rightsub|Extra --Attack|[[1d@{throwing} - ((1 - @{throwingTrained}) * 2) + ?{Attack Modifier|0}[Mod] - @{wound}[Wounds] - @{fatigue}[Fatigue]]] --Damage|[[@{repeating_rangedweapon_1_dnum}d@{repeating_rangedweapon_0_dtype} + @{repeating_rangedweapon_1_weaponmod} + ?{Damage Modifier|0}[Mod]]] --Raise|[[1d@{repeating_rangedweapon_1_draise}]] --Range|@{repeating_rangedweapon_1_weaponrange} --Notes|@{repeating_rangedweapon_1_rangednotes}' /></td>
                </tr>
                <tr>
                  <td>Ranged Weapon 2</td>
                  <td>Shooting</td>
                  <td>Throwing</td>
                </tr>
                <tr>
                  <td><input type="text" class="sheet-short" name="attr_rangedname_Extra2" disabled="True" value="@{repeating_rangedweapon_2_rangedname}" /></td>
                  <td><button type="roll" value='!power --whisper| --name|@{name} shoots with their @{repeating_rangedweapon_2_rangedname} --leftsub|Shooting Attack --rightsub|Extra --Attack|[[1d@{shooting} - ((1 - @{shootingTrained}) * 2) + ?{Attack Modifier|0}[Mod] - @{wound}[Wounds] - @{fatigue}[Fatigue]]] --Damage|[[@{repeating_rangedweapon_2_dnum}d@{repeating_rangedweapon_2_dtype} + @{repeating_rangedweapon_2_weaponmod} + ?{Damage Modifier|0}[Mod]]] --Raise|[[1d@{repeating_rangedweapon_2_draise}]] --Range|@{repeating_rangedweapon_2_weaponrange} --Notes|@{repeating_rangedweapon_2_rangednotes}' /></td>
                  <td><button type="roll" value='!power --whisper| --name|@{name} throws their @{repeating_rangedweapon_2_rangedname} --leftsub|Throwing Attack --rightsub|Extra --Attack|[[1d@{throwing} - ((1 - @{throwingTrained}) * 2) + ?{Attack Modifier|0}[Mod] - @{wound}[Wounds] - @{fatigue}[Fatigue]]] --Damage|[[@{repeating_rangedweapon_2_dnum}d@{repeating_rangedweapon_2_dtype} + @{repeating_rangedweapon_2_weaponmod} + ?{Damage Modifier|0}[Mod]]] --Raise|[[1d@{repeating_rangedweapon_2_draise}]] --Range|@{repeating_rangedweapon_2_weaponrange} --Notes|@{repeating_rangedweapon_2_rangednotes}' /></td>
                </tr>
                <tr>
                  <td>Ranged Weapon 3</td>
                  <td>Shooting</td>
                  <td>Throwing</td>
                </tr>
                <tr>
                  <td><input type="text" class="sheet-short" name="attr_rangedname_Extra3" disabled="True" value="@{repeating_rangedweapon_3_rangedname}" /></td>
                  <td><button type="roll" value='!power --whisper| --name|@{name} shoots with their @{repeating_rangedweapon_3_rangedname} --leftsub|Shooting Attack --rightsub|Extra --Attack|[[1d@{shooting} - ((1 - @{shootingTrained}) * 2) + ?{Attack Modifier|0}[Mod] - @{wound}[Wounds] - @{fatigue}[Fatigue]]] --Damage|[[@{repeating_rangedweapon_3_dnum}d@{repeating_rangedweapon_3_dtype} + @{repeating_rangedweapon_3_weaponmod} + ?{Damage Modifier|0}[Mod]]] --Raise|[[1d@{repeating_rangedweapon_3_draise}]] --Range|@{repeating_rangedweapon_3_weaponrange} --Notes|@{repeating_rangedweapon_3_rangednotes}' /></td>
                  <td><button type="roll" value='!power --whisper| --name|@{name} throws their @{repeating_rangedweapon_3_rangedname} --leftsub|Throwing Attack --rightsub|Extra --Attack|[[1d@{throwing} - ((1 - @{throwingTrained}) * 2) + ?{Attack Modifier|0}[Mod] - @{wound}[Wounds] - @{fatigue}[Fatigue]]] --Damage|[[@{repeating_rangedweapon_3_dnum}d@{repeating_rangedweapon_3_dtype} + @{repeating_rangedweapon_3_weaponmod} + ?{Damage Modifier|0}[Mod]]] --Raise|[[1d@{repeating_rangedweapon_3_draise}]] --Range|@{repeating_rangedweapon_3_weaponrange} --Notes|@{repeating_rangedweapon_3_rangednotes}' /></td>
                </tr>
              </table>
            </div>
      </div>
    </div>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
