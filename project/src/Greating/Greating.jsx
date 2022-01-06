import './Greating.css';

function Greating(){
    let curDate =new Date(2021 ,12,31, 22);
    curDate = curDate.getHours();
    let greeting =" " ;
    const cssStyle ={ };
    
    if(curDate >= 1 && curDate<12){
      greeting ="Good Morning";
      cssStyle.color ="Green";
    }else if(curDate >= 12 && curDate<19){
      greeting ="Good Afternoon";
      cssStyle.color ="red";
    }else{
      greeting="Good Night";
      cssStyle.color ="darkblue";
    }
      return (<>
        <div>
         <h1>Hello sir <span style={cssStyle}>{greeting}</span></h1>
        
        </div>
        
        </>
        
      );
}
export default Greating;