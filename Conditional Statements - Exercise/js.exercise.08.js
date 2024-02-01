function solve(name, episodeDuration, breakDuration) {
    name=String(name)
    episodeDuration=Number(episodeDuration);
    breakDuration=Number(breakDuration)
    let timeForLunch= breakDuration / 8;
    let timeForRelaxation= breakDuration / 4;

    let time= breakDuration - timeForLunch - timeForRelaxation;

    if( episodeDuration <= time){
        let rest= Math.ceil(episodeDuration - time)

        console.log(`You have enough time to watch ${name} and left with ${rest} minutes free time.`)
    }else{
        let needed= Math.ceil( episodeDuration - time)
        console.log(`You don't have enough time to watch ${name}, you need ${needed} more minutes.`)
    }
}
// solve("Game of Thrones",
// 60,
// 96)
// solve("Teen Wolf",
// 48,
// 60)
solve(["Game of Thrones",
60,
96])