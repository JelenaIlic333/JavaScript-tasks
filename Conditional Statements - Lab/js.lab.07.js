function povrsinaFigura(figura, a, b){
    if(figura === "square"){
        let povrsina= a * a
        console.log(povrsina)
    }else if(figura === "rectangle"){
        let povrsina= a * b
        console.log(povrsina)
    }else if(figura === "circle"){
        let r = a;
        let povrsina= Math.PI * r * r
        console.log(povrsina)
    }else if(figura === "triangle"){
        let h=b;
        let povrsina=(a * h )/2
        console.log(povrsina)
    }
}