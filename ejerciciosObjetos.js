
function StopWatch() {
    let tiempoInicio, tiempoFinal, duracion = 0, enCurso;


    //hay que definir la variable enCurso, porque en el prototypo no esta implementada

    Object.defineProperty(this, 'duracion', {
        get: function() {return duracion; },
        set: function(value) {duration=value;}
    }); 


    Object.defineProperty(this, 'tiempoInicio', {
        get: function() {return duracion; }
    });     
    Object.defineProperty(this, 'tiempoFinal', {
        get: function() {return tiempoFinal; }
    }); 
    Object.defineProperty(this, 'enCurso', {
        get: function() {return duracion; }
    }); 
    
}

StopWatch.prototype.start = function() {
    if (this.duracionenCurso)
        throw new Error("StopWatch has already started");
    this.duracionenCurso = true;
    this.duraciontiempoInicio = new Date();
};

this.StopWatch.prototype.stop = function() {
    if (!this.enCurso)
        throw new Error ("StopWatch is not started");
    this.enCurso = false;
    this.tiempoFinal = new Date();

    const segundos = (tiempoFinal.getTime() - tiempoInicio.getTime()) / 1000;
    duracion += segundos;
};
StopWatch.prototype.reset = function() {
    this.tiempoInicio = null;
    this.tiempoFinal = null;
    this.enCurso=false;
    this.duracion = 0;
    };


const sw = new StopWatch();

sw.duration = 10;

