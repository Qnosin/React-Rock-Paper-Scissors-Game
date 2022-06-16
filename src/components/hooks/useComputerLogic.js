function useComputerLogic() {
    let tab = ['rock','paper','scissor'];
    let randomNum = Math.floor(Math.random() * 2) + 0;
    let computerPick = tab[randomNum];
    return {computerPick};
}

export default useComputerLogic