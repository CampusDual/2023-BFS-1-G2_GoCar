export class FormatLocation {
  public format(infoLocation: string): any[] {
    let resFinal = infoLocation.split(",");
  
    resFinal = resFinal.slice(2);
    let infoCiudad = resFinal[0];
    const city= infoCiudad.slice(7, infoCiudad.length);    
    resFinal.toString().split(" ");    
    resFinal.shift();
    resFinal.unshift(city);
    // console.log(resFinal)
    return resFinal;
    
  }
}
