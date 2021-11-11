/**
 * Ammendment to the Pokemon Exercise
 * 
 * In our custom Pokemon game, there are players.
 * Each player can have more than one Pokemons.
 * 
 * Each Pokemon has defend skills as well. These denfend skills protect them
 * from attack skills.
 * Each defend skill corresponds to an attack skill.
 * There are definite number of attack and defend skills in all the game
 * at least 8 attack skills and 8 defend skills.
 * 
 * The damage that each attack skill is causing depends on the corresponding defend skill.
 * E.g. for the 'lightning attack' there is the 'lightning protection skill'
 * 
 * Each skill can be max 100 points and min 0 points
 * 
 * Each attack should create 10% damage of its value.
 * E.g. An attack skill with 20 points should create 2 points damage
 * 
 * When a defending skill is greater or equal to the corresponging attack skill
 * of the opponent, then the attack will do 50% less damage.
 * 
 * E.g. An attack skill with 20 points against a 20 points defending skill, 
 * should create 1 points damage
 * 
 * If the attack skill is greater than the defending skill, then it should
 * create 100% damage
 * 
 * E.g. An attack skill with 20 points against a 10 points defending skill, 
 * should create 2 points damage
 * 
 * Each pokemon has 5 attack and 5 defend skills only. 
 * 
 * When a Pokemon is using an attack skill and the defending Pokemon has not the
 * corresponding skill, then this means that the the defending Pokemon has 0 points
 * on that defending skill.
 * 
 * When a player is created, he should set the attacking pokemon and the defensing pokemon
 * and to be able also to change them.
 * Each player should be able to attack other players using his selected Pokemon.
 * 
 * Each player should be able to battle with other players. 
 * Each day, no more than 5 battles are allowed to every player.
 * 
 * Each battle should have a winner and a looser player. 
 * Each battle consists of 5 attacks per player.
 * Each attack depends on the attack skill of the attacker and defend skill of the defender
 * on that specific attack skill
 * 
 * The outcome of the attack is a positive number.
 * 
 * The points the winner gets, is the sum of points won from attacking minus points lost 
 * from defending.
 * 
 * The winner of the battle is the one that got more points. 
 * 
 * You need to take into consideration which player is attacking first as well.
 * If a player has 0 points health left, then he can't continue playing the game for that
 * day.
 * 
 * 
 * At the end of the day the game should be able to find the winner - 
 * that is the player with the most won points.
 * Each day the points start from 0.
 * 
 * 
 * **************************************************************************
 * In the game there are also groups. Each group can be consisted of maximum 3 players
 * One player can be in only one group.
 * 
 * There should be one player as a group creator and administrator.
 * The group administrator should be able to pick a battle against another group.
 * The administrator should set which player should battle which opponent.
 * 
 * There are group battles as well. After each battle there is a winner group and a 
 * loosing group.
 * Group Battles are similar to single player battles. The difference is that
 * there are 3 players against 3 other players.
 * That means that in each group battle there will be 3 player battles.
 * After the battle, the group with more points (not more wins) wins the battle.
 * 
 * 
 * Each group could have 1 battle per day.
 * 
 * At the end of the day, the winner group is announced
 * based on the total points gathered
 * 
 * **************************************************************************
 * Optional:
 * Since the health and other levels are falling after each battle, develop a system
 * so that players can buy or do something in the game so they can increase their health
 * and other levels
 */