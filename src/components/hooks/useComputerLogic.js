function useComputerLogic() {
    let tab = ['rock','paper','sicssors'];
    let randomNum = Math.floor(Math.random() * 3) + 0;
    console.log(randomNum);
    let computerPick = tab[randomNum];
    return {computerPick};
}

export default useComputerLogic