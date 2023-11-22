var simulationCanvas = null;
var simulationScrollCanvas = null;
var simulation = null;

var	canvasBorderWidth = 1;

var isJSON = false;


function NLDynamicalSystem()
{
	this.scrollView = null;
	
	this.canvasName = null;
	this.canvasScrollName = null;

	this.isRunning = false
    this.derivativeObject = this;
    this.timeStep = 0.03;
	this.data = null;
	this.f = null;
	this.dataMode = 0; // 0 read from file ; 1 read from array (ebook)
	
	this.configuration = 0;
	this.configurationTime = 0;
    
	this.initSimulationFromJSON = function(jsonFile)
	{
		if (isJSON == true)
		{
			$.ajaxSetup({async: false});
			$.getJSON(jsonFile, function(aData)
								{
									var simu = $(simulation)[0];
									simu.data = aData;
								});
			$.ajaxSetup({async: true});
		}
		else
		{
			this.data = JSON.parse(jsondata);
		}
	}
	
	this.setMainCanvas = function(canvasName)
	{
		if (simulationCanvas != null) return;
		
		simulationCanvas = Processing.getInstanceById(canvasName);
		tmpElement = document.getElementById(canvasName)
        simulationCanvas.size(tmpElement.offsetWidth, tmpElement.offsetHeight);
        
        this.initSimulation();
        
        //if (simulationScrollCanvas != null) this.initSimulation();
	}
	
	this.setSecondCanvas = function(secondCanvasName)
	{
		if (simulationScrollCanvas != null) return;
		
		this.canvasScrollName = secondCanvasName;
		simulationScrollCanvas = Processing.getInstanceById(secondCanvasName);
		tmpElement = document.getElementById(secondCanvasName);
        simulationScrollCanvas.size(tmpElement.offsetWidth, tmpElement.offsetHeight);
        
        if (simulationCanvas != null) this.initSimulation();
	}
	
	this.initSimulation = function(canvasName, canvasScrollName)
	{
		var tmpElement;
		var aVector;
		var texFont, standartFont;
		var i, j;
		var tmpRegExp;
		
		

		var p = $("#SimulationBox")[0];
		p.addEventListener("touchmove", function(e){e.preventDefault();}, true);

		this.initSimulationFromJSON("./Fonction.json");
		
		
		// Interface
		//$(TitreSimulation).text(this.data.titre);
		
		
		this.timeStep = this.data.timeStep;
		
		this.variables = new Array();
		for (i = 0; i < this.data.ListeVariables.length; i ++)
		{
			this.variables[i] = this.data.ListeVariables[i];
		}
		
		
		this.equations = new Array();
		for (i = 0; i < this.data.ListeDEquations.length; i ++)
		{
			this.equations[i] = this.data.ListeDEquations[i].equation;
			
			this.equations[i] = this.equations[i].replace(/sin/gi, "Math.sin");
			this.equations[i] = this.equations[i].replace(/cos/gi, "Math.cos");
			for (j = 0; j < this.variables.length; j ++)
			{
				//tmpStr = "/"+this.variables[j]+"/g";
				tmpRegExp = new RegExp(this.variables[j], "g");
				this.equations[i] = this.equations[i].replace(tmpRegExp, this.variables[j]+"[i]");
			}
		}
		this.f = this.data.fonction;

		// Parameters
		var val, min, max,name, tmpNum = this.data.parametres.length;

		this.parameter = new NLParameter();
        this.parameter.init(tmpNum);
		
		
		for (i = 0; i < tmpNum; i ++)
		{
			name = this.data.parametres[i].nom;
			progName = this.data.parametres[i].progNom;
			val = this.data.parametres[i].val;
			min = this.data.parametres[i].min;
			max = this.data.parametres[i].max;
			
			this.parameter.setNameOfParameterNumber(name, i);
			this.parameter.setProgNameOfParameterNumber(progName, i);
			this.parameter.setValueMinMaxOfParameterNumber(val, min, max, i);
		}
		
		for (i = tmpNum; i < 6; i ++)
		{
			var $aSlider = $("#divslider"+i);
			if ($aSlider != null)
	        {
	        	/*
	        	$aSlider.slider("disable");
	        	$aSlider.slider("destroy");
				$aSlider.empty();
				$aSlider.remove();
				$("#labelSlider"+i).text("")
				*/
				$aSlider.remove();
				
				//$aSlider.next().find('.ui-slider').remove();
				//$aSlider.next().find('.ui-slider-handle').remove();
	        }
		}
		
		
		// Vecteur
		var _tmpTaille = 1;
		if (this.data.tailleVariable != null) _tmpTaille = this.data.tailleVariable;
		aVector = new NLVector(1, _tmpTaille, this.variables.length);
		aVector.init(1, _tmpTaille, this.variables.length);

		for (i = 0; i < this.variables.length; i ++)
		{
			aVector.setNameOfComponentNumber(this.variables[i], i);
		}

		this.setVector(aVector);
		
		
      	// View
		this.view = new NL2DPhaseViewBis();
		this.view.init(simulationCanvas);
		this.view.setVector(this.vector);
        
        
        var x = -(1 - 10*Math.sqrt(this.parameter.parameters[0]));
        var w = 2 * 10*Math.sqrt(this.parameter.parameters[0]);

        this.view.setBounds(x, -this.data.grille.y.min,
                            w, this.data.grille.y.max - this.data.grille.y.min);
        
		/*this.view.setBounds(-this.data.grille.x.min, -this.data.grille.y.min,
							this.data.grille.x.max - this.data.grille.x.min, 
							this.data.grille.y.max - this.data.grille.y.min);*/
							
		this.view.showAxes = this.data.grille.montrerAxe;
		this.view.showGrid = this.data.grille.montrerGrille;
		this.view.showValues = this.data.grille.montrerValeurs;
		
		this.view.showComponentXNumber = this.data.grille.x.varNum;
		this.view.showComponentYNumber = this.data.grille.y.varNum;
		
		this.view.hideXNegGrid = this.data.grille.x.cacherGrilleNegative;
		this.view.hideYNegGrid = this.data.grille.y.cacherGrilleNegative;
		
		if (this.view.hideXNegGrid == true) this.view.limitXValues = {x:0, y:20};
		
		
		this.view.teXFont = simulationCanvas.createFont("../../NLLib.wdgt/Baskerville.ttf", 18); 
		this.view.standartFont = simulationCanvas.createFont("../../NLLib.wdgt/helveticaneue-light.ttf");
		
		this.view.parameter = this.parameter;
		this.view.integrator = this;
		
		this.changeVectorFieldMode(this.data.CI.montrerChampsDeVecteurs);
		this.view.setCIVolumeMode(this.data.CI.mode);
		
//		for (i = 0; i < Math.min(this.vector.numberOfComponents,
//								 this.data.CI.values.length); 
//								 i ++)
//		{
//			this.vector.setValuesOfComponentNumber(i, this.data.CI.values[i]);
//		}
        
        var nbCI = this.data.CI.values.length;
        var value;
        
        for (j = 0; j < nbCI; j ++)
        {
            for (i = 0; i < Math.min(this.vector.numberOfComponents, this.data.CI.values[j].length); i ++)
            {
                value = this.data.CI.values[j][i];
                cvalues = this.vector.valuesOfComponentNumber(i);
                cvalues[j] = value;
            }
        }
        
        // this.view.initWithValues(this.data.CI.values) [[x0 y0 z0 ...][x1 y1 z1]..]
        
		this.view.userChangesVectorValues();
        this.view.indexCI = nbCI;
		
		
        if (this.data.autoStart == true) 
        {
        	$('#start-button').children('.ui-btn-inner').children('.ui-btn-text').text("Stop");
        	this.isRunning = true;
        	simulationCanvas.loop();
		}
        
        _removeLoaderContent();
        
        //this.view.parameterChanged();
        //this.view.refreshForced();
        
		return simulationCanvas;
	}
	
	this._f = function(x, y)
	{
		
		eval(this.data.function)
	}
	
	this.iterate = function()
	{
		var i;
				
		if (this.view.isDragging == false) 
			for (i = 0; i < this.view.stepToRefresh; i ++)
			{
				this._iterate();
				this.view.refreshIfNeeded();
			}
	}
	
	
    this.vectorFieldAt = function(aVector, aVectorField, aTime) 
    {
        if (aVector == null || aVectorField == null || this.parameter == null) return;
        
        var i, iEqu;
        var size =  aVector.numberOfPoints; //this.view.indexCI;
        
        var x = aVector.valuesOfComponentNumber(0);
        var y = aVector.valuesOfComponentNumber(1);
        
        var dx = aVectorField.valuesOfComponentNumber(0);
        var dy = aVectorField.valuesOfComponentNumber(1);
        
        var anEqu;
        var xy2;
        
        var Epsilon = this.parameter.parameters[0];
        var P = this.parameter.parameters[1];
        var A = this.parameter.parameters[2];
        
        /*
        for (i = 0; i < this.parameter.numberOfParameters; i ++)
        {
	        window[this.parameter.parametersProgName[i]] = this.parameter.parameters[i];
        }
        */
        

		for (i = 0; i < size; i ++)
        {
            xy2 = (y[i] - x[i])*(y[i] - x[i]);
            dx[i] = -1/Epsilon * (x[i] - 1) - (1 + A*xy2)*x[i];
            dy[i] = P - (1.0 + A * xy2)*y[i];
        }
        
    }
    
    
    
    this.setConfigurationTime = function(aConfig)
	{
		if (aConfig == this.configurationTime) return;
		this.configurationTime = aConfig;
		

		this.view.updateVectorFieldGrid();
		this.view.refreshForced();
	}

    this.setConfiguration = function(aConfig)
	{
		
	}
	
	////////////////////////////////////////////////////////////////
	
	this.startParameterChanged = function()
    {
        this.parameter.draggingParameter = true;
        this.parameter.draggedParameter = true;
        //view.parameterChanged();
        //processingHisto.parameterChanged();
    }

    this.stopParameterChanged = function()
    {
        this.parameter.draggingParameter = false;
        this.parameter.draggedParameter = true;
        
        //view.parameterChanged();
        //processingHisto.parameterChanged();
        
        simulationCanvas.redraw();
    }

    this.setParameterValue = function(offset, value)
    {
        if (this.parameter.parameters[offset] == value)
        {
            return;
        }
        
        this.parameter.parameters[offset] = value;
        this.parameter.parameterChangedNumber = offset;
        
        //this.fillVector1(this.fixedVector1);
        //this.fillVector2(this.fixedVector2);

		if (this.view != undefined)
        {
            if (offset == 0)
            {
                var x, y, w, h;
                
                y = this.view.bounds.position.y;
                h = this.view.bounds.size.height;
                
                x = -(1 - 10*Math.sqrt(value));
                w = 2 * 10*Math.sqrt(value);
                
                this.view.setBounds(x, y, w, h);
                
            }

            this.view.parameterChanged();
            this.view.refreshForced();
        }
        //if (processingInstanceScroll) processingInstanceScroll.reset();
    }
	
	this.mousePressed = function()
	{
		//this.scrollView.refreshForced();
	}
    
    this.setRunning = function(target)
    {
        if (this.isRunning == true) 
        {
            this.isRunning = false;
            simulationCanvas.noLoop();
        }
        else
        {
            simulationCanvas.loop();
            this.isRunning = true;
        }
    }

    this.changeVectorFieldMode = function(checked)
    {
        this.view.setVectorFieldMode(checked);
        //$("#VectorFieldCheckbox").attr('checked', checked);
        //var tmp = ; //$('input[name=VectorFieldCheckbox]');
        //$("#VectorFieldCheckbox").prop('checked', t);
        //$("#VectorFieldCheckbox").attr('checked','checked');
    }
    
    this.changeCIVolumeMode= function(checked)
    {
        this.view.setCIVolumeMode(checked);
        this.view.refreshForced();
    }
    
    this.clearView = function()
    {
        this.view.refreshForced();
        //this.scrollView.refreshForced();
        //if (processingInstanceScroll) processingInstanceScroll.reset();
    }
	
	
	/*
	this.resizeCanvas = function()
	{
		var tmpElement = document.getElementById(this.canvasName);
		if (simulationCanvas != null) 
		{
			simulationCanvas.size(tmpElement.offsetWidth, tmpElement.offsetHeight);
			this.view.setFrame(0, 0, tmpElement.offsetWidth, tmpElement.offsetHeight);
			this.view.refreshForced();
		}
	}
	*/
}



function resizeCanvas()
{
	if (simulation != null) simulation.resizeCanvas();
}



this.computesxsy = function()
{
    //with (this)
    {
        this.sx = (this.frame.size.width / this.bounds.size.width);
        this.sy = (this.frame.size.height / this.bounds.size.height);
    
        this.dw = this.bounds.size.width / this.frame.size.width;
        this.dh = this.bounds.size.height / this.frame.size.height;
    
    
    
    /*this.dxGrid = 0.01;
    
    if (this.bounds.size.width > 1000) this.dxGrid = 1000;
    else if (this.bounds.size.width > 500) this.dxGrid = 50;
    else if (this.bounds.size.width > 100) this.dxGrid = 100;
    else if (this.bounds.size.width > 50) this.dxGrid = 50;
    else if (this.bounds.size.width > 10) this.dxGrid = 10;
    else if (this.bounds.size.width > 5) this.dxGrid = 5;
    else if (this.bounds.size.width > 1) this.dxGrid = 1;
    else if (this.bounds.size.width > 0.5) this.dxGrid = 0.5;
    else if (this.bounds.size.width > 0.1) this.dxGrid = 0.1;
    else if (this.bounds.size.width > 0.05) this.dxGrid = 0.05;
    else if (this.bounds.size.width > 0.01) this.dxGrid = 0.01;
    */
    
    
    if (this.bounds.size.width > 100) this.dxGrid = Math.ceil(this.bounds.size.width / 100.0)*10;
    else if (this.bounds.size.width > 10) this.dxGrid = Math.ceil(this.bounds.size.width / 10.0);
    else if (this.bounds.size.width > 5) this.dxGrid = 1;
    else if (this.bounds.size.width > 1) this.dxGrid = 0.5;
    else if (this.bounds.size.width > 0.5) this.dxGrid = 0.2;
    else if (this.bounds.size.width > 0.1) this.dxGrid = 0.1;
    else if (this.bounds.size.width > 0.01) this.dxGrid = 0.01;
    else if (this.bounds.size.width > 0.001) this.dxGrid = 0.001;
    else if (this.bounds.size.width > 0.0001) this.dxGrid = 0.0001;
    else if (this.bounds.size.width > 0.00001) this.dxGrid = 0.00001;
    
    
    this.dyGrid = 0.01;
    /*
    if (this.bounds.size.height > 1000) this.dyGrid = 1000;
    else if (this.bounds.size.height > 100) this.dyGrid = 100;
    else if (this.bounds.size.height > 10) this.dyGrid = 10;
    else if (this.bounds.size.height > 1) this.dyGrid = 1;
    else if (this.bounds.size.height > 0.1) this.dyGrid = 0.1;
    else if (this.bounds.size.height > 0.01) this.dyGrid = 0.01;
    */
    
    if (this.bounds.size.height > 100) this.dyGrid = Math.ceil(this.bounds.size.height / 100.0)*10;
    else if (this.bounds.size.height > 10) this.dyGrid = Math.ceil(this.bounds.size.height / 10.0);
    else if (this.bounds.size.height > 5) this.dyGrid = 1;
    else if (this.bounds.size.height > 1) this.dyGrid = 0.5;
    else if (this.bounds.size.height > 0.5) this.dyGrid = 0.2;
    else if (this.bounds.size.height > 0.1) this.dyGrid = 0.1;
    else if (this.bounds.size.height > 0.01) this.dyGrid = 0.01;
    else if (this.bounds.size.height > 0.001) this.dyGrid = 0.001;
    else if (this.bounds.size.height > 0.0001) this.dyGrid = 0.0001;
    
    this.needChangeValuesLabel = true;
    }
}

NLDynamicalSystem.prototype = new NLIntegrator();
NLDynamicalSystem.prototype.constructor = NLDynamicalSystem;

function NL2DPhaseViewBis()
{
    this.showGridArrow = true;
       this.drawGridNumbers = function()
       {
           var nStep;
           var i;
           var startGridX, startGridY;
           var tmpText;
           var tmpWidthText;
           var tmpHeightText;
           var _tmpPosX, _tmpPosY;
           
           var offsetPixelForXNumber = 20;
           var offsetPixelForYNumber = -5;
           
           if (this.bounds.size.height < 0.01 || this.bounds.size.width < 0.01) return
           
           if (this.standartFont != null) this.canvas.textFont(this.standartFont, 12);
           
           with (this)
           {
               
               canvas.stroke(strokeColorGrid);
               canvas.fill(fillColorGrid);
               canvas.strokeWeight(1);
               
               //goodMinX = Math.ceil(bounds.position.x / dxGrid) * dxGrid;
               //goodMinY = Math.ceil(bounds.position.y / dyGrid) * dyGrid;
               //goodMaxX = ceil(pMax.y / incY) * dyGrid;
               
               if (hideXNegGrid == false)
               {
                   startGridX = -bounds.position.x;
                   goodMinX = Math.ceil(bounds.position.x / dxGrid) * dxGrid;
               }
               else
               {
                   startGridX = 0;
                   goodMinX = 0;
               }
               
               if (hideYNegGrid == false)
               {
                   startGridY = -bounds.position.y;
                   goodMinY = Math.ceil(bounds.position.y / dyGrid) * dyGrid;
               }
               else
               {
                   startGridY = 0;
                   goodMinY = 0;
               }
               
               nStep = Math.ceil(bounds.size.width / dxGrid);
               
               for (i = 0; i <= nStep; i ++)
               {
                   _tmpPosX = -goodMinX + i*dxGrid;
                   
                   if (_tmpPosX != 0.0 || (_tmpPosX == 0.0 && this.showX0GridValue == true))
                   {
                       tmpText = _tmpPosX.toFixed(textFloatingPoint);
                       tmpWidthText = this.canvas.textWidth(tmpText);
                       
                       /*
                       // pour decaler le chiffre a coté de la flèche. Plus necessaire
                       if (i == nStep)
                       {
                           this.delegate.text(tmpText,
                                           localToScreenX(_tmpPosX)-tmpWidthText - 2,
                                           localToScreenY(-bounds.position.y)-5);
                       }
                       else
                       */
                       {
                           //this.delegate
                           this.canvas.text(tmpText,
                                           localToScreenX(_tmpPosX)-tmpWidthText/2,
                                           localToScreenY(0) + offsetPixelForXNumber);
                       }
                   }
               }
               
               
               nStep = Math.ceil(bounds.size.height / dyGrid);
               for (i = 0; i <= nStep; i ++)
               {
                   _tmpPosY = -goodMinY + i*dyGrid;
                   
                   if (_tmpPosY != 0.0 || (_tmpPosY == 0.0 && this.showY0GridValue == true))
                   {
                       tmpText = _tmpPosY.toFixed(textFloatingPoint);
                       tmpWidthText = this.canvas.textWidth(tmpText);
                       /*
                       // pour decaler le chiffre a coté de la flèche. Plus necessaire
                       if (i == nStep)
                       {
                           this.delegate.text(tmpText,
                                       localToScreenX(0) - tmpWidthText - 10,
                                       localToScreenY(_tmpPosY-12*dh));
                       }
                       else
                       */
                       {
                           //this.delegate
                           if (this.bounds.minX() > 0)
                            this.canvas.text(tmpText, 5,
                                localToScreenY(_tmpPosY-0*dh));
                           else
                            this.canvas.text(tmpText,
                                       localToScreenX(0) - tmpWidthText + offsetPixelForYNumber,
                                       localToScreenY(_tmpPosY-0*dh));
                       }
                   }
               }
               
               //if (this.showY0GridValue == false && this.showX0GridValue == false)
               {
                   tmpText = "0";
                   tmpWidthText = this.canvas.textWidth(tmpText);
                   switch (this.positionOfCommon0)
                   {
                       case 0 : // cadran bas gauche
                           _tmpPosX = localToScreenX(0) - tmpWidthText + offsetPixelForYNumber;
                           _tmpPosY = localToScreenY(0) + offsetPixelForXNumber;
                           break;
                       case 1 : // cadran bas droite
                           break;
                       case 2 : // cadran haut gauche
                           break;
                       case 3 : // cadran haud droite
                           break;
                   }
                   this.canvas.text(tmpText, _tmpPosX, _tmpPosY);
               }
               
           }
       }

       this._drawAllIn = function()
       {
           
           this.canvas.background(this.backgroundColor);
           this.canvas.fill(this.backgroundColor);
           
           /*this.rect(-this.bounds.position.x*1.1, -this.bounds.position.y*1.1, this.bounds.size.width*1.1, this.bounds.size.height*1.1);*/
           
           if (this.showGrid == true) this.drawGrid();
           if (this.showAxes == true) this.drawAxes();
           
           this.drawAllAxis();
           this.drawAllFixedVectors();

           if (this.showValues == true) this.drawGridNumbers();
           if (this.showAxisNames == true) this.drawAxisNames();
           
           if (this.vectorFieldMode == true)
           {
               this.drawVectorsField();
           }
           
           if (this.CIMode == 1)
           {
               var u = this.vector.valuesOfComponentNumber(this.showComponentXNumber);
               var v = this.vector.valuesOfComponentNumber(this.showComponentYNumber);
               //this.canvas.stroke(0, 0.4);
               this.canvas.noStroke(0, 0.4);
               this.canvas.fill(0,0.1);
               this.canvas.beginShape();
               for (j = 0; j < this.indexCI; j ++)
               {
                   this.vertex(u[j], v[j]);
               }
               this.canvas.endShape();
               
   /*
               this.canvas.fill(0.3);
               for (j = 0; j < this.indexCI; j ++)
               {
                   this.ellipse(u[j], v[j], 3*this.dw, 3*this.dh);
               }
   */
           }
           
           this.drawAxisLandmarks();

       }

     this.drawAxes = function()
     {
         var beginX = -this.bounds.position.x;
         var beginY = -this.bounds.position.y;
         var endX = this.bounds.size.width - 2*this.dw;
         var endY = this.bounds.size.height - 2*this.dh;
         
         if (this.hideXNegGrid == true)
         {
             beginX = this.dw;
             endX -= this.bounds.position.x;
         }
         if (this.hideYNegGrid == true)
         {
             beginY = this.dh;
             endY -= this.bounds.position.y;
         }
         
         // on affiche plus les flèches qui ne servent à rien
         
         
         {
             with (this)
             {
                 this.canvas.strokeWeight(this.strokeWeightAxes);
                 canvas.stroke(strokeColorAxe);
                 
                 endX = endX + beginX;
                 endY = endY + beginY;
                 
                 this.line(beginX, 0, endX, 0);
                 this.line(0, beginY, 0, endY);
                 
                  if (this.showValues == true)
                  {
                      if (this.bounds.minX() > 0)
                            this.line(this.bounds.minX()+this.dw, beginY, this.bounds.minX()+this.dw, endY);
                            
                        if (this.bounds.minY() > 0)
                        this.line(beginX, this.bounds.minY()+this.dh, endX, this.bounds.minY()+this.dh);
                }
                

                 if (this.showGridArrow)
                 {
                     //  problèmes d'arrondis au pixel le plus proche inferieur, necessite qu'on decale d'un pixel dw ou dh
                     
                     if (this.bounds.size.width > 0)
                     {
                         this.line(endX, 0, endX-10*dw, 0+5*dh);
                         this.line(endX, 0, endX-10*dw, 0-5*dh);
                     }
                     else
                     {
                         this.line(beginX, 0, beginX+10*dw, 0+5*dh);
                         this.line(beginX, 0, beginX+10*dw, 0-5*dh);
                     }
                     
                     if (this.bounds.size.height > 0)
                     {
                         this.line(0, endY, -5*dw,endY-10*dh);
                         this.line(0, endY, +5*dw, endY-10*dh);
                     }
                     else
                     {
                         this.line(0, beginY, -5*dw,beginY-10*dh);
                         this.line(0, beginY, +5*dw, beginY-10*dh);
                     }
                 }
                 
                 
                 //drawArrowMC(beginX, 0, endX, 0);
                 //drawArrowMC(0, beginY, endY, Math.PI/2);
                 
             }
         }
     }

}
NL2DPhaseViewBis.prototype = new NL2DPhaseView();
NL2DPhaseViewBis.prototype.constructor = NL2DPhaseViewBis;


$(document).ready(function()
{
    $("input[name='time-choice-1']").change(function()
    {
        var selected = parseInt($(this).val()); // or this.value
        simulation.setConfigurationTime(selected);
	});

    $("input[name='radio-choice-1']").change(function()
    {
        var selected = parseInt($(this).val()); // or this.value
        simulation.setConfiguration(selected);
	});
    
    
//     $('.ui-slider-track').margin("0 15px 20px 78px");
     $('.ui-slider-track').width(150);
     $('.ui-input-text').width(55);
     $('.ui-input-text').css('font-size', 12);
});

