import { NgIf } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

interface Personas{
  nombre:string;
  apaterno:string;
  amaterno:string;
  dia:number;
  mes:number;
  anio:number;
  genero:string;
}

@Component({
  selector: 'app-zodiaco',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './zodiaco.component.html',
  styles: ``
})

export default class ZodiacoComponent {
  formGroup!:FormGroup;
  edad = 0;
  animal=''
  fotoanimal=''

  persona:Personas={
    nombre: '',
    apaterno:'',
    amaterno:'',
    dia:0,
    mes:0,
    anio:0,
    genero:''
  }

  constructor(private fb:FormBuilder){}
   ngOnInit(): void {
    this.formGroup=this.initForm();
  } 
  initForm():FormGroup{
    return this.fb.group({
      nombre:[''],
      apaterno:[''],
      amaterno:[''],
      dia:0,
      mes:0,
      anio:0,
      genero:['']
    })
  } 
  onSubmit():void{
    const{nombre, apaterno, amaterno, dia, mes, anio, genero}=this.formGroup.value;
    this.persona.nombre=nombre;
    this.persona.apaterno=apaterno;
    this.persona.amaterno=amaterno;
    this.persona.dia=dia;
    this.persona.mes=mes;
    this.persona.anio=anio;
    this.persona.genero=genero;
    let alumnoJSON=JSON.stringify(this.persona);

    this.edad = 2024-anio;

    if(mes<10 && dia< 16){
      this.edad=this.edad-1;
    }
    

    this.animal=this.obtenerSignoChino(anio)

    switch(this.animal){
      case 'rata':
        this.fotoanimal='https://cdn3.uvnimg.com/a2/32/fdc709d24b6cb6a8f78ee9ccde80/rata.jpg';
        break;
      case 'Buey o Búfalo':
        this.fotoanimal='https://sonofchina.com/wp-content/uploads/2022/05/cattle-zodiac-275x300.jpg';
        break;
      case 'Tigre':
        this.fotoanimal='https://media.istockphoto.com/id/1315222132/tr/vekt%C3%B6r/kaplan-ka%C4%9F%C4%B1t-kese-kaplan%C4%B1-%C3%A7in-zodyak-kaplan-y%C4%B1l%C4%B1.jpg?s=170667a&w=0&k=20&c=wIyPKYKq7or_-omL4ymu3RZSK7jKYDI767PJQbgDD-4=';
        break;
      case 'Conejo':
        this.fotoanimal='https://es.calcuworld.com/wp-content/uploads/sites/2/2017/10/conejo-horoscopo-chino-624x386.jpg';
        break;
      case 'Dragón':
        this.fotoanimal='https://pt.calcuworld.com/wp-content/uploads/sites/6/2019/12/dragao-horoscopo-chines.jpg';
        break;
      case 'Serpiente':
        this.fotoanimal='https://th.bing.com/th/id/OIP.iqKkcekhowsM7leVAAG3GgAAAA?w=236&h=236&rs=1&pid=ImgDetMain';
        break;
      case 'Caballo':
        this.fotoanimal='https://th.bing.com/th/id/R.5f66229042e3ee3d43f992421fc49aac?rik=hME3xUORfAf6fQ&riu=http%3a%2f%2fpic39.photophoto.cn%2f20160506%2f0005018310966658_b.jpg&ehk=EDLhHzyyovPCPmSgjEgqGg9C9v0E177VkPQT%2fNVgWHQ%3d&risl=&pid=ImgRaw&r=0';
        break;
      case 'Cabra':
        this.fotoanimal='https://th.bing.com/th/id/R.4542f4aeb28025b67eaad1ca1cd78853?rik=K0Y2N3V%2fcoW%2fDw&pid=ImgRaw&r=0';
        break;
      case 'Mono':
        this.fotoanimal='https://th.bing.com/th/id/OIP.I1t-ndBHoNrKDHW4u-Dw9wHaHa?rs=1&pid=ImgDetMain';
        break;
      case 'Gallo':
        this.fotoanimal='https://th.bing.com/th/id/OIP.TRRZIL1ApBkHnMet_dXFyQHaGn?rs=1&pid=ImgDetMain';
        break;
      case 'Perro':
        this.fotoanimal='https://th.bing.com/th/id/R.83f10fbbf29f7256b97aed76b8b8d70f?rik=4oq1L0O3z69fFQ&pid=ImgRaw&r=0';
        break;
      case 'Cerdo o Jabalí':
        this.fotoanimal='https://th.bing.com/th/id/R.01c985f661a9383f9cd33987671a7a95?rik=JfXPaeN2Hk6vNg&pid=ImgRaw&r=0';
        break;
        default:
          this.fotoanimal= "Alch no se";
    }

    

    console.log(this.formGroup.value);

    /* localStorage.setItem('materia', this.materia);
    localStorage.setItem('alumno', alumnoJSON); */
  }

  obtenerSignoChino(anio: number): string {
    switch (anio) {
      case 1900: 
      case 1912: 
      case 1924: 
      case 1936: 
      case 1948: 
      case 1960: 
      case 1972: 
      case 1984: 
      case 1996: 
      case 2008: 
      case 2020:
        return "Rata";
  
      case 1901: 
      case 1913: 
      case 1925: 
      case 1937: 
      case 1949: 
      case 1961: 
      case 1973: 
      case 1985: 
      case 1997: 
      case 2009: 
      case 2021:
        return "Buey o Búfalo";
  
      case 1902: 
      case 1914: 
      case 1926: 
      case 1938: 
      case 1950: 
      case 1962: 
      case 1974: 
      case 1986: 
      case 1998: 
      case 2010: 
      case 2022:
        return "Tigre";
  
      case 1903: 
      case 1915: 
      case 1927: 
      case 1939: 
      case 1951: 
      case 1963: 
      case 1975: 
      case 1987: 
      case 1999: 
      case 2011: 
      case 2023:
        return "Conejo";
  
      case 1904: 
      case 1916: 
      case 1928: 
      case 1940: 
      case 1952: 
      case 1964: 
      case 1976: 
      case 1988: 
      case 2000: 
      case 2012: 
      case 2024:
        return "Dragón";
  
      case 1905: 
      case 1917: 
      case 1929: 
      case 1941: 
      case 1953: 
      case 1965: 
      case 1977: 
      case 1989: 
      case 2001: 
      case 2013: 
      case 2025:
        return "Serpiente";
  
      case 1906: 
      case 1918: 
      case 1930: 
      case 1942: 
      case 1954: 
      case 1966: 
      case 1978: 
      case 1990: 
      case 2002: 
      case 2014: 
      case 2026:
        return "Caballo";
  
      case 1907: 
      case 1919: 
      case 1931: 
      case 1943: 
      case 1955: 
      case 1967: 
      case 1979: 
      case 1991: 
      case 2003: 
      case 2015: 
      case 2027:
        return "Cabra";
  
      case 1908: 
      case 1920: 
      case 1932: 
      case 1944: 
      case 1956: 
      case 1968: 
      case 1980: 
      case 1992: 
      case 2004: 
      case 2016: 
      case 2028:
        return "Mono";
  
      case 1909: 
      case 1921: 
      case 1933: 
      case 1945: 
      case 1957: 
      case 1969: 
      case 1981: 
      case 1993: 
      case 2005: 
      case 2017: 
      case 2029:
        return "Gallo";
  
      case 1910: 
      case 1922: 
      case 1934: 
      case 1946: 
      case 1958: 
      case 1970: 
      case 1982: 
      case 1994: 
      case 2006: 
      case 2018: 
      case 2030:
        return "Perro";
  
      case 1911: 
      case 1923: 
      case 1935: 
      case 1947: 
      case 1959: 
      case 1971: 
      case 1983: 
      case 1995: 
      case 2007: 
      case 2019: 
      case 2031:
        return "Cerdo o Jabalí";
  
      default:
        return "Año fuera del rango";
    }
  }


  
}

