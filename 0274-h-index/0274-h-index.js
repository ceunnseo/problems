/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    //citations[i] : i번째 논문이 인용이 된 횟수
    //h-index : 연구자가 최소 h개의 논문을 발표하고 각 논문이 최소 h회 이상 인용된 h의 최대값
    
    //[6,5,3,1,0]
    //h-index = 3 -> 6, 5, 3 번 인용이 됐던 논문 3개를 발표하고, 3회 이상 인용됨
    //[100]
    //h-index = 1 -> 100번 인용이 됐던 논문 1개를 발표하고, 1회 이상 인용됨
    //[0]
    //h-index = 0 -> 0번 인용이 됐던 논문
    //[1,1,3]
    //h-index = 1 -> 1번 인용이 됐던 논문 2개를 발표하고, 1회 이상 인용됨
    citations.sort((a, b) => b-a) 
    let h = 0;
    for (let i = 0; i < citations.length; i++) {
        if ((i+1) <= citations[i]){ 
            //console.log((i+1), citations[i], h)
            h = (i+1)
        }   
    }
    return h;
};