// Bài 1.1
let a1 = [1,3,2,"a"];
let a2 = [1,2,3,5,"b"];
function checkArray(A1,A2){
  let abc = A1;
   for (let i = 0 ; i < A2.length;i++) {
    abc.push(A2[i]);
    
   }
    let totalAr = new Set(abc);
    console.log(totalAr);
}

checkArray(a1,a2);
// Bài 1.2
let teams = [
	{
		name: "A",
		point: 99,
		GD: 45,
	},
	{
		name: "C",
		point: 75,
		GD: 39,
	},
	{
		name: "M",
		point: 60,
		GD: 29,
	},
	{
		name: "L",
		point: 88,
		GD: 39,
	},
];
teams.sort((a, b) => {
	if (a.point === b.point && a.GD !== b.GD) return a.GD - b.GD;
	else if (a.point === b.point && a.GD === b.GD)
		return a.name.toUpperCase() > b.name.toUpperCase()
			? 1
			: a.name.toUpperCase() < b.name.toUpperCase()
			? -1
			: 0;
	else return b.point - a.point;
});
let result = teams.map((team, index) => {
	team.position = ++index;
	return team;
});
console.log(result);