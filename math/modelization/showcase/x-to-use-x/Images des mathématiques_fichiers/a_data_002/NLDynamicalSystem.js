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
        
        if (simulationScrollCanvas != null) this.initSimulation();
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
		
/*
		simulation = this;
		$(document).simulation = this;
		
		this.canvasName = canvasName;
		simulationCanvas = Processing.getInstanceById(canvasName);
		tmpElement = document.getElementById(canvasName);
        simulationCanvas.size(tmpElement.offsetWidth-2*canvasBorderWidth, tmpElement.offsetHeight-2*canvasBorderWidth);
		
		
		this.canvasScrollName = canvasScrollName;
		simulationScrollCanvas = Processing.getInstanceById(canvasScrollName);
		tmpElement = document.getElementById(canvasScrollName);
        simulationScrollCanvas.size(tmpElement.offsetWidth-2*canvasBorderWidth, tmpElement.offsetHeight-2*canvasBorderWidth);
		simulationScrollCanvas.setSimulation(this);

*/

		this.initSimulationFromJSON("./Fonction.json");
		
		
		var p = $("#ParametersBox")[0];
		p.addEventListener("touchmove", function(e){e.preventDefault();}, true);
		
		
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
		this.view.setBounds(-this.data.grille.x.min, -this.data.grille.y.min,
							this.data.grille.x.max - this.data.grille.x.min, 
							this.data.grille.y.max - this.data.grille.y.min);
							
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
		
		for (i = 0; i < Math.min(this.vector.numberOfComponents,
								 this.data.CI.values.length); 
								 i ++)
		{
			this.vector.setValuesOfComponentNumber(i, this.data.CI.values[i]);
		}
		this.view.userChangesVectorValues();
		
		// ScrollView
		this.scrollView = new NLScrollView();
		this.scrollView.init(simulationScrollCanvas);
		this.scrollView.setVector(this.vector);
		var sizeScroll = 1000;
		this.scrollView.setBounds(0.05*sizeScroll, 4, sizeScroll, 8);
		this.scrollView.stepToRefresh = 3;
		this.scrollView.showComponentYNumber = 1;
		
		this.scrollView.teXFont = simulationCanvas.createFont("../../NLLib.wdgt/Baskerville.ttf", 18); 
		this.scrollView.standartFont = simulationCanvas.createFont("../../NLLib.wdgt/helveticaneue-light.ttf");
		
        this.scrollView.xAxisName = "p , y";
        this.scrollView.showAxisNames = true;
        
        this.scrollView.parameter = this.parameter;
		this.scrollView.integrator = this;
		this.view.refreshForced();
		this.scrollView.refreshForced();
		
        if (this.data.autoStart == true) 
        {
        	$('#start-button').children('.ui-btn-inner').children('.ui-btn-text').text("Stop");
        	this.isRunning = true;
        	simulationCanvas.loop();
        	simulationScrollCanvas.loop();
		}
        
        _removeLoaderContent();
        
		return simulationCanvas;
	}
	
	this._f = function(x, y)
	{
	}
	
	this.iterate = function()
	{
		var i, j;
        var p = this.vector.valuesOfComponentNumber(0);
        var size = this.vector.numberOfPoints;
        
        var P0 = this.parameter.parameters[0];
        var A = this.parameter.parameters[1];
        var Omega = this.parameter.parameters[2];
        var _a = this.parameter.parameters[3];
        
		if (this.view.isDragging == false && this.parameter.draggingParameter == false)
			for (i = 0; i < this.view.stepToRefresh; i ++)
			{
                for (j = 0; j < size; j ++)
                    p[j] = P0 + A*Math.cos(Omega*this.time);
				this._iterate();
				this.view.refreshIfNeeded();
			}
	}
	
	
    this.vectorFieldAt = function(aVector, aVectorField, aTime) 
    {
        if (aVector == null || aVectorField == null || this.parameter == null) return;
        
        var i, iEqu;
        var size =  aVector.numberOfPoints; //this.view.indexCI;
        
        var p = aVector.valuesOfComponentNumber(0);
        var y = aVector.valuesOfComponentNumber(1);
        
        var dp = aVectorField.valuesOfComponentNumber(0);
        var dy = aVectorField.valuesOfComponentNumber(1);
        
        var P0 = this.parameter.parameters[0];
        var A = this.parameter.parameters[1];
        var Omega = this.parameter.parameters[2];
        var _a = this.parameter.parameters[3];

        /*
        for (i = 0; i < this.vector.numberOfComponents; i ++)
        {
	        window[this.variables[i]] = aVector.valuesOfComponentNumber(i);
	        window["d"+this.variables[i]] = aVectorField.valuesOfComponentNumber(i);
        }
        
        for (i = 0; i < this.parameter.numberOfParameters; i ++)
        {
	        window[this.parameter.parametersProgName[i]] = this.parameter.parameters[i];
        }
        */
        
        for (i = 0; i < size; i ++)
        {
            dp[i] = 0;
        	dy[i] = p[i] - (1 + _a*(y[i]-1)*(y[i]-1))*y[i];
        }
        //console.log("u1= "+u1[0] +" v1= "+ v1[0] +" u2= "+ u2[0] + " v2= "+ v2[0]);
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
        if (this.view != undefined)
        {
            this.view.parameterChanged();
            this.view.refreshForced();
            this.scrollView.refreshForced();
        }
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
        
        // max(A) >= p0
        if (offset == 0)
        {
        
            var $aSlider = $("#NLSlider-1");
            
            if ($aSlider != null)
            {
                $aSlider.attr("max",  value);
                $aSlider.attr("value",  Math.min(value, this.parameter.parameters[1]));
                $aSlider.slider('refresh');
            }

        }
        
        
		if (this.view != undefined)
        {
            this.time = 0;
            this.view.parameterChanged();
            this.view.refreshForced();
            this.scrollView.refreshForced();
        }
        
        //if (processingInstanceScroll) processingInstanceScroll.reset();
    }
	
	this.mousePressed = function()
	{
		this.scrollView.refreshForced();
	}
    
    this.setRunning = function(target)
    {
        if (this.isRunning == true) 
        {
            this.isRunning = false;
            simulationCanvas.noLoop();
            simulationScrollCanvas.noLoop();
        }
        else
        {
            simulationCanvas.loop();
            simulationScrollCanvas.loop();
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
        this.scrollView.refreshForced();
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



function NL2DPhaseViewBis()
{
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
                        if (this.bounds.minY() >= 0)
                            this.canvas.text(tmpText, localToScreenX(_tmpPosX)-tmpWidthText/2,
                                localToScreenY(0) - 5);
                        else
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
                        if (this.bounds.minX() >= 0)
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

    this.parameterChanged = function()
    {
        /*
        var i;
        var tmp;
        
        if (this.vectorFieldMode == true)
        {
            this.updateVectorFieldGrid();
        }
        for (i = 0; i < this.fixedVectors.length; i ++)
        {
            tmp = this.fixedVectors[i];
            this.fillFixedVector(i);
            if (tmp.fillFunction != null) tmp.update();
        }
        for (i = 0; i < this.fixedPoints.length; i ++)
        {
            tmp = this.fixedPoints[i]
            if (tmp.fillFunction != null) tmp.update();
        }
        */
        this.userChangesVectorValues();
    }
    
    this.mousePressed = function()
    {
    }
    
    this.mouseDragged = function()
    {
    }
    
    this.mouseDragged = function()
    {
    }
    
    this.mouseReleased = function()
    {
    }
}
NL2DPhaseViewBis.prototype = new NL2DPhaseView();
NL2DPhaseViewBis.prototype.constructor = NL2DPhaseViewBis;

function resizeCanvas()
{
	if (simulation != null) simulation.resizeCanvas();
}

NLDynamicalSystem.prototype = new NLIntegrator();
NLDynamicalSystem.prototype.constructor = NLDynamicalSystem;

$(document).ready(function()
{

    $('.ui-slider-track').width(150);
    $('.ui-input-text').width(55);
    $('.ui-input-text').css('font-size', 12);
});
