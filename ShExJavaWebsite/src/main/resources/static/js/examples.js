function changeRecursive(){
    if (document.getElementById("algorithm").value == "refine"){
        document.getElementById("recursive").style.display = 'none';
    } else {
        document.getElementById("recursive").style.display = 'block';
    }
}

function loadExample() {
   example = document.getElementById("predefined").value;
   if (example == "empty"){
       document.getElementById("data").value = "";
       document.getElementById("schema").value = "";
       document.getElementById("node").value = "";
       document.getElementById("shape").value = "";
       document.getElementById("schemaformat").value = "ShExC";
       document.getElementById("dataformat").value = "TURTLE";
   } else if (example == "Simple ShExC example"){
       document.getElementById("data").value = simple_data;
       document.getElementById("schema").value = simple_schec;
       document.getElementById("node").value = "http://example.org/alice";
       document.getElementById("shape").value = "http://example.org/User";
       document.getElementById("schemaformat").value = "ShExC";
       document.getElementById("dataformat").value = "TURTLE";
   } else if (example == "Simple ShExR example"){
       document.getElementById("data").value = simple_data;
       document.getElementById("schema").value = simple_scher_ttl;
       document.getElementById("node").value = "http://example.org/alice";
       document.getElementById("shape").value = "http://example.org/User";
       document.getElementById("schemaformat").value = "ShExR(TURTLE)";
       document.getElementById("dataformat").value = "TURTLE";
   } else if (example == "Names (ShExC)"){
       document.getElementById("data").value = names_data;
       document.getElementById("schema").value = names_schec;
       document.getElementById("node").value = "http://example.shex∕user4";
       document.getElementById("shape").value = "http://a.example/User";
       document.getElementById("schemaformat").value = "ShExC";
       document.getElementById("dataformat").value = "TURTLE";
   } else if (example == "Names (ShExJ)"){
       document.getElementById("data").value = names_data;
       document.getElementById("schema").value = names_schej;
       document.getElementById("node").value = "http://example.shex∕user4";
       document.getElementById("shape").value = "http://a.example/User";
       document.getElementById("schemaformat").value = "ShExJ";
       document.getElementById("dataformat").value = "TURTLE";
   } else if (example == "Bug report (ShExC)"){
       document.getElementById("data").value = bugreport_data;
       document.getElementById("schema").value = bugreport_schec;
       document.getElementById("node").value = "http://example.shex∕bug1";
       document.getElementById("shape").value = "http://a.example/BugReport";
       document.getElementById("schemaformat").value = "ShExC";
       document.getElementById("dataformat").value = "TURTLE";
   } else if (example == "Bug report (ShExJ)"){
       document.getElementById("data").value = bugreport_data;
       document.getElementById("schema").value = bugreport_schej;
       document.getElementById("node").value = "http://example.shex∕bug1";
       document.getElementById("shape").value = "http://a.example/BugReport";
       document.getElementById("schemaformat").value = "ShExJ";
       document.getElementById("dataformat").value = "TURTLE";
   } else if (example == "Datatypes (ShExC)"){
       document.getElementById("data").value = datatypes_data;
       document.getElementById("schema").value = datatypes_shexC;
       document.getElementById("node").value = "http://a.example/decimal-n1";
       document.getElementById("shape").value = "http://a.example/S-integer";
       document.getElementById("schemaformat").value = "ShExC";
       document.getElementById("dataformat").value = "TURTLE";
   } else if (example == "User data graph"){
       document.getElementById("data").value = bugreport_data;
       document.getElementById("schema").value = "";
       document.getElementById("node").value = "http://example.shex∕bug1";
       document.getElementById("shape").value = "http://a.example/BugReport";
       document.getElementById("schemaformat").value = "ShExC";
       document.getElementById("dataformat").value = "TURTLE";
   } else if (example == "Bug report graph"){
       document.getElementById("data").value = users_data;
       document.getElementById("schema").value = "";
       document.getElementById("node").value = "";
       document.getElementById("shape").value = "";
       document.getElementById("schemaformat").value = "ShExC";
       document.getElementById("dataformat").value = "TURTLE";
   } else if (example == "Countries Graph"){
       document.getElementById("data").value = countries_data;
       document.getElementById("schema").value = countries_sch;
       document.getElementById("node").value = "";
       document.getElementById("shape").value = "";
       document.getElementById("schemaformat").value = "ShExC";
       document.getElementById("dataformat").value = "TURTLE";
   }
   
}



//----------------------------
// Simple example
//----------------------------
var simple_data = `PREFIX :       <http://example.org/>
PREFIX schema: <http://schema.org/>
PREFIX xsd:    <http://www.w3.org/2001/XMLSchema#>
PREFIX foaf:   <http://xmlns.com/foaf/0.1/>

:alice schema:name           "Alice" ; 
       schema:gender         schema:Female ;
       schema:knows          :bob .

:bob   schema:gender         schema:Male ;
       schema:name           "Robert";            
       schema:birthDate      "1980-03-10"^^xsd:date .

:carol schema:name           "Carol" ; 
       schema:gender         schema:Female ;  
       foaf:name             "Carol" .`
       
var simple_schec = `PREFIX :       <http://example.org/>
PREFIX schema: <http://schema.org/>
PREFIX xsd:  <http://www.w3.org/2001/XMLSchema#>

:User IRI { 
 schema:name          xsd:string  ;
 schema:birthDate     xsd:date?  ;
 schema:gender        [ schema:Male schema:Female ];
 schema:knows         @:User*
}`

var simple_scher_ttl = `PREFIX sx: <http://www.w3.org/ns/shex#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
prefix : <http://example.org/>
prefix schema: <http://schema.org/>

:schema a sx:Schema ;
   sx:shapes :User .

:User a sx:ShapeAnd ;
  sx:shapeExprs (
   [ a sx:NodeConstraint ;
     sx:nodeKind sx:iri 
   ] 
   [ a sx:Shape;
     sx:Expression 
      [ a sx:TripleConstraint ;
        sx:predicate schema:name ;
        sx:valueExpr [
         a sx:NodeConstraint ;
         sx:datatype xsd:String
        ]
      ]
   ]
 ) .`  

//----------------------------
// Datatypes example
//----------------------------
var datatypes_shexC = `<http://a.example/S-integer> { <http://a.example/p> <http://www.w3.org/2001/XMLSchema#integer> }
<http://a.example/S-decimal> { <http://a.example/p> <http://www.w3.org/2001/XMLSchema#decimal> }
<http://a.example/S-float> { <http://a.example/p> <http://www.w3.org/2001/XMLSchema#float> }
<http://a.example/S-double> { <http://a.example/p> <http://www.w3.org/2001/XMLSchema#double> }
<http://a.example/S-string> { <http://a.example/p> <http://www.w3.org/2001/XMLSchema#string> }
<http://a.example/S-boolean> { <http://a.example/p> <http://www.w3.org/2001/XMLSchema#boolean> }
<http://a.example/S-dateTime> { <http://a.example/p> <http://www.w3.org/2001/XMLSchema#dateTime> }
`

var datatypes_data = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

#    integer            -1 0 1 +1 | "" -1.0 +1.0 1E0 NaN INF
<http://a.example/integer-n1> <http://a.example/p> "-1"^^xsd:integer .
<http://a.example/integer-0> <http://a.example/p> "0"^^xsd:integer .
<http://a.example/integer-1> <http://a.example/p> "1"^^xsd:integer .
<http://a.example/integer-p1> <http://a.example/p> "+1"^^xsd:integer .
 <http://a.example/integer-empty> <http://a.example/p> ""^^xsd:integer .
 <http://a.example/integer-n1.0> <http://a.example/p> "-1.0"^^xsd:integer .
 <http://a.example/integer-p1.0> <http://a.example/p> "+1.0"^^xsd:integer .
 <http://a.example/integer-1E0> <http://a.example/p> "1E0"^^xsd:integer .
 <http://a.example/integer-NaN> <http://a.example/p> "NaN"^^xsd:integer .
 <http://a.example/integer-INF> <http://a.example/p> "INF"^^xsd:integer .

#    decimal            -1 0 1 +1 -1.0 +1.0 | "" 1E0 NaN INF
<http://a.example/decimal-n1> <http://a.example/p> "-1"^^xsd:decimal .
<http://a.example/decimal-0> <http://a.example/p> "0"^^xsd:decimal .
<http://a.example/decimal-1> <http://a.example/p> "1"^^xsd:decimal .
<http://a.example/decimal-p1> <http://a.example/p> "+1"^^xsd:decimal .
<http://a.example/decimal-n1.0> <http://a.example/p> "-1.0"^^xsd:decimal .
<http://a.example/decimal-p1.0> <http://a.example/p> "+1.0"^^xsd:decimal .
 <http://a.example/decimal-empty> <http://a.example/p> ""^^xsd:decimal .
 <http://a.example/decimal-1E0> <http://a.example/p> "1E0"^^xsd:decimal .
 <http://a.example/decimal-NaN> <http://a.example/p> "NaN"^^xsd:decimal .
 <http://a.example/decimal-INF> <http://a.example/p> "INF"^^xsd:decimal .

#    float              -1 0 1 +1 -1.0 +1.0 1e0 1E0 NaN INF -INF | "" +INF
<http://a.example/float-n1> <http://a.example/p> "-1"^^xsd:float .
<http://a.example/float-0> <http://a.example/p> "0"^^xsd:float .
<http://a.example/float-1> <http://a.example/p> "1"^^xsd:float .
<http://a.example/float-p1> <http://a.example/p> "+1"^^xsd:float .
<http://a.example/float-n1.0> <http://a.example/p> "-1.0"^^xsd:float .
<http://a.example/float-p1.0> <http://a.example/p> "+1.0"^^xsd:float .
<http://a.example/float-NaN> <http://a.example/p> "NaN"^^xsd:float .
<http://a.example/float-INF> <http://a.example/p> "INF"^^xsd:float .
<http://a.example/float-nINF> <http://a.example/p> "-INF"^^xsd:float .
<http://a.example/float-1e0> <http://a.example/p> "1e0"^^xsd:float .
<http://a.example/float-1E0> <http://a.example/p> "1E0"^^xsd:float .
 <http://a.example/float-empty> <http://a.example/p> ""^^xsd:float .
 <http://a.example/float-pINF> <http://a.example/p> "+INF"^^xsd:float .

#    double             -1 0 1 +1 -1.0 +1.0 1E0 1e0 NaN INF -INF | "" +INF
<http://a.example/double-n1> <http://a.example/p> "-1"^^xsd:double .
<http://a.example/double-0> <http://a.example/p> "0"^^xsd:double .
<http://a.example/double-1> <http://a.example/p> "1"^^xsd:double .
<http://a.example/double-p1> <http://a.example/p> "+1"^^xsd:double .
<http://a.example/double-n1.0> <http://a.example/p> "-1.0"^^xsd:double .
<http://a.example/double-p1.0> <http://a.example/p> "+1.0"^^xsd:double .
<http://a.example/double-1E0> <http://a.example/p> "1E0"^^xsd:double .
<http://a.example/double-1e0> <http://a.example/p> "1e0"^^xsd:double .
<http://a.example/double-NaN> <http://a.example/p> "NaN"^^xsd:double .
<http://a.example/double-INF> <http://a.example/p> "INF"^^xsd:double .
<http://a.example/double-nINF> <http://a.example/p> "-INF"^^xsd:double .
 <http://a.example/double-empty> <http://a.example/p> ""^^xsd:double .
 <http://a.example/double-pINF> <http://a.example/p> "+INF"^^xsd:double .
`


//----------------------------
// Bug report example
//----------------------------
var bugreport_schec = `<http://a.example/User> {
  <http://a.example/name> <http://www.w3.org/2001/XMLSchema#string>;
  <http://a.example/email> <http://www.w3.org/2001/XMLSchema#string>?
}

<http://a.example/Employee> {
    (
        <http://a.example/name> <http://www.w3.org/2001/XMLSchema#string> 
        | (
          <http://a.example/first-name> <http://www.w3.org/2001/XMLSchema#string>; 
          <http://a.example/last-name> <http://www.w3.org/2001/XMLSchema#string> 
          )
    )
    ; <http://a.example/email> <http://www.w3.org/2001/XMLSchema#string>
}

<http://a.example/BugReport> {
    <http://a.example/descr> <http://www.w3.org/2001/XMLSchema#string>;
    <http://a.example/reportedBy> @<http://a.example/User> ;
    <http://a.example/reportedOn> <http://www.w3.org/2001/XMLSchema#dateTime>;  
    (
        <http://a.example/reproducedBy> @<http://a.example/Employee> ;
        <http://a.example/reproducedOn> <http://www.w3.org/2001/XMLSchema#dateTime>;  
    ) ?
    ; <http://a.example/related> @<http://a.example/BugReport> *; 
}`

var bugreport_schej = `{
  "@context": "http:\/\/www.w3.org\/ns\/shex.jsonld",
  "type": "Schema",
  "shapes": [
    {
      "id": "http:\/\/a.example\/BugReport",
      "type": "Shape",
      "expression": {
        "type": "EachOf",
        "expressions": [
          {
            "type": "TripleConstraint",
            "predicate": "http:\/\/a.example\/descr",
            "valueExpr": {
              "type": "NodeConstraint",
              "datatype": "http:\/\/www.w3.org\/2001\/XMLSchema#string"
            }
          },
          {
            "type": "TripleConstraint",
            "predicate": "http:\/\/a.example\/reportedBy",
            "valueExpr": "http:\/\/a.example\/User"
          },
          {
            "type": "TripleConstraint",
            "predicate": "http:\/\/a.example\/reportedOn",
            "id": "http:\/\/a.example\/reportDate",
            "valueExpr": {
              "type": "NodeConstraint",
              "datatype": "http:\/\/www.w3.org\/2001\/XMLSchema#dateTime"
            }
          },
          {
            "type": "EachOf",
            "min": 0,
            "max": 1,
            "expressions": [
              {
                "type": "TripleConstraint",
                "predicate": "http:\/\/a.example\/reproducedBy",
                "valueExpr": "http:\/\/a.example\/Employee"
              },
              {
                "type": "TripleConstraint",
                "predicate": "http:\/\/a.example\/reproducedOn",
                "id": "http:\/\/a.example\/reproducedDate",
                "valueExpr": {
                  "type": "NodeConstraint",
                  "datatype": "http:\/\/www.w3.org\/2001\/XMLSchema#dateTime"
                }
              }
            ]
          },
          {
            "type": "TripleConstraint",
            "predicate": "http:\/\/a.example\/related",
            "min": 0,
            "max": -1,
            "valueExpr": "http:\/\/a.example\/BugReport"
          }
        ]
      }
    },
    {
      "id": "http:\/\/a.example\/User",
      "type": "Shape",
      "expression": {
        "type": "EachOf",
        "expressions": [
          {
            "type": "TripleConstraint",
            "predicate": "http:\/\/a.example\/name",
            "valueExpr": {
              "type": "NodeConstraint",
              "datatype": "http:\/\/www.w3.org\/2001\/XMLSchema#string"
            }
          },
          {
            "type": "TripleConstraint",
            "predicate": "http:\/\/a.example\/email",
            "min": 0,
            "max": 1,
            "valueExpr": {
              "type": "NodeConstraint",
              "datatype": "http:\/\/www.w3.org\/2001\/XMLSchema#string"
            }
          }
        ]
      }
    },
    {
      "id": "http:\/\/a.example\/Employee",
      "type": "Shape",
      "expression": {
        "type": "EachOf",
        "expressions": [
          {
            "type": "OneOf",
            "expressions": [
              {
                "type": "TripleConstraint",
                "predicate": "http:\/\/a.example\/name",
                "valueExpr": {
                  "type": "NodeConstraint",
                  "datatype": "http:\/\/www.w3.org\/2001\/XMLSchema#string"
                }
              },
              {
                "type": "EachOf",
                "expressions": [
                  {
                    "type": "TripleConstraint",
                    "predicate": "http:\/\/a.example\/first-name",
                    "valueExpr": {
                      "type": "NodeConstraint",
                      "datatype": "http:\/\/www.w3.org\/2001\/XMLSchema#string"
                    }
                  },
                  {
                    "type": "TripleConstraint",
                    "predicate": "http:\/\/a.example\/last-name",
                    "valueExpr": {
                      "type": "NodeConstraint",
                      "datatype": "http:\/\/www.w3.org\/2001\/XMLSchema#string"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "TripleConstraint",
            "predicate": "http:\/\/a.example\/email",
            "valueExpr": {
              "type": "NodeConstraint",
              "datatype": "http:\/\/www.w3.org\/2001\/XMLSchema#string"
            }
          }
        ]
      }
    }
  ]
}`

var bugreport_data = `<http://example.shex∕user1> <http://a.example/name> "Mr. Smith" .

<http://example.shex∕emp1> <http://a.example/name> "Mrs. Smith" ;
	<http://a.example/email> "eva@h.org" .

<http://example.shex∕bug1> <http://a.example/descr> "Kaboom!" ;
	<http://a.example/reportedOn> "2012-12-04T00:00:00.094+01:00"^^<http://www.w3.org/2001/XMLSchema#dateTime> ;
	<http://a.example/reportedBy> <http://example.shex∕user1> ;
	<http://a.example/reproducedOn> "2012-12-06T00:00:00.094+01:00"^^<http://www.w3.org/2001/XMLSchema#dateTime> ;
	<http://a.example/reproducedBy> <http://example.shex∕emp1> .

<http://example.shex∕bug2> <http://a.example/descr> "Bham!" ;
	<http://a.example/reportedOn> "2013-11-02T00:00:00.094+01:00"^^<http://www.w3.org/2001/XMLSchema#dateTime> ;
	<http://a.example/reportedBy> <http://example.shex∕emp1> .

<http://example.shex∕bug1> <http://a.example/related> <http://example.shex∕bug2> .

<http://example.shex∕bug2> <http://a.example/related> <http://example.shex∕bug1> .`


//----------------------------
// Names example
//----------------------------
var names_schec = `<http://a.example/UserStringName> {
  <http://a.example/name> <http://www.w3.org/2001/XMLSchema#string>;
}

<http://a.example/UserCompName> {
  <http://a.example/first-name> <http://www.w3.org/2001/XMLSchema#string> ;
  <http://a.example/last-name> <http://www.w3.org/2001/XMLSchema#string> 
}

<http://a.example/User> (
  @<http://a.example/UserStringName> 
  OR @<http://a.example/UserCompName>
)`

var names_schej = `{
  "@context": "http://www.w3.org/ns/shex.jsonld",
  "type": "Schema",
  "shapes": [
    {
      "id": "http://a.example/UserStringName",
      "type": "Shape",
      "expression": {
          "type": "TripleConstraint",
          "predicate": "http://a.example/name",
          "valueExpr": {
            "type": "NodeConstraint",
            "datatype": "http://www.w3.org/2001/XMLSchema#string"
          }
      }
    },{
      "id": "http://a.example/UserCompName",
      "type": "Shape",
      "expression": {
          "type": "EachOf",
          "expressions": [{
              "type": "TripleConstraint",
              "predicate": "http://a.example/first-name",
              "valueExpr": {
                "type": "NodeConstraint",
                "datatype": "http://www.w3.org/2001/XMLSchema#string"
              }
            },{
              "type": "TripleConstraint",
              "predicate": "http://a.example/last-name",
              "valueExpr": {
                "type": "NodeConstraint",
                "datatype": "http://www.w3.org/2001/XMLSchema#string"
              }
            }
          ]
      }
    },{
      "id": "http://a.example/User",
      "type": "ShapeOr",
      "shapeExprs":[
          "http://a.example/UserStringName",
          "http://a.example/UserCompName"
      ]
    }
  ]
}`

var names_data = `<http://example.shex∕user1> <http://a.example/name> "Mr. Smith John" .

<http://example.shex∕user2> <http://a.example/first-name> "John" .

<http://example.shex∕user3> <http://a.example/last-name> "Smith" .

<http://example.shex∕user4> <http://a.example/last-name> "Smith" ;
                            <http://a.example/first-name> "John" .`
                            

//----------------------------
// Countries graph
//----------------------------


var users_data = `PREFIX ex      <http://example.org/>
PREFIX schema: <http://schema.org/>
PREFIX xsd:    <http://www.w3.org/2001/XMLSchema#>
PREFIX foaf:   <http://xmlns.com/foaf/0.1/>

ex:bob  <http://schema.org/gender>   schema:Male ;  #this is a comment
        ex:name                      "Robert"@fr; # A string Literal witha langtag     
        schema:birthDate             "1980-03-10"^^xsd:date . # A date literal

ex:alice ex:name                      "Alice" ; 
          schema:gender                schema:Female ;
          # Multiple neighbours with the same predicate.
          # The last one is a blank node.
          schema:knows                 :bob, :carol , _:others. 

         # Create a subnode with the two neighbours "John" and "Doe".
ex:john  ex:name [ schema:first-name "John"; 
                   schema:first-name "Doe" ];
         # Create a collection
         schema:siblings       ( :carol :alice :bob ).
`

//----------------------------
// Countries graph
//----------------------------


var countries_sch = `PREFIX code: <http://telegraphis.net/ontology/measurement/code#>
PREFIX geographis: <http://telegraphis.net/ontology/geography/geography#>
PREFIX gn: <http://www.geonames.org/ontology#>
PREFIX measurement: <http://telegraphis.net/ontology/measurement/measurement#>
PREFIX metric: <http://www.telegraphis.net/ontology/measurement/metric#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX quantity: <http://www.telegraphis.net/ontology/measurement/quantity#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

PREFIX sch: <http://example.org/>
`

var countries_data = `@prefix code: <http://telegraphis.net/ontology/measurement/code#> .
@prefix geographis: <http://telegraphis.net/ontology/geography/geography#> .
@prefix gn: <http://www.geonames.org/ontology#> .
@prefix measurement: <http://telegraphis.net/ontology/measurement/measurement#> .
@prefix metric: <http://www.telegraphis.net/ontology/measurement/metric#> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix quantity: <http://www.telegraphis.net/ontology/measurement/quantity#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .

<http://telegraphis.net/data/countries/AD#AD> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/AD/Andorra_la_Vella#AndorralaVella> ;
	geographis:currency <http://telegraphis.net/data/currencies/EUR#EUR> ;
	geographis:isoAlpha2 "AD" ;
	geographis:isoAlpha3 "AND" ;
	geographis:isoNumeric "020" ;
	geographis:isoShortName "ANDORRA"@en , "ANDORRE"@fr ;
	geographis:landArea _:node1chi8o4qax1 .

_:node1chi8o4qax1 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "468.0" .

<http://telegraphis.net/data/countries/AD#AD> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax2 .

_:node1chi8o4qax2 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "AD" .

<http://telegraphis.net/data/countries/AD#AD> code:hasCode _:node1chi8o4qax3 .

_:node1chi8o4qax3 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "AND" .

<http://telegraphis.net/data/countries/AD#AD> code:hasCode _:node1chi8o4qax4 .

_:node1chi8o4qax4 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "020" .

<http://telegraphis.net/data/countries/AD#AD> code:hasCode _:node1chi8o4qax5 .

_:node1chi8o4qax5 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "AN" .

<http://telegraphis.net/data/countries/AD#AD> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Andorra"@en ;
	gn:population "72000" ;
	owl:sameAs <http://dbpedia.org/resource/Andorra> , <http://sws.geonames.org/3041565/> , <http://www.geonames.org/countries/#AD> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Andorra> .

<http://telegraphis.net/data/countries/AE#AE> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/AE/Abu_Dhabi#AbuDhabi> ;
	geographis:currency <http://telegraphis.net/data/currencies/AED#AED> ;
	geographis:isoAlpha2 "AE" ;
	geographis:isoAlpha3 "ARE" ;
	geographis:isoNumeric "784" ;
	geographis:isoShortName "UNITED ARAB EMIRATES"@en , "ÉMIRATS ARABES UNIS"@fr ;
	geographis:landArea _:node1chi8o4qax6 .

_:node1chi8o4qax6 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "82880.0" .

<http://telegraphis.net/data/countries/AE#AE> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax7 .

_:node1chi8o4qax7 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "AE" .

<http://telegraphis.net/data/countries/AE#AE> code:hasCode _:node1chi8o4qax8 .

_:node1chi8o4qax8 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "AE" .

<http://telegraphis.net/data/countries/AE#AE> code:hasCode _:node1chi8o4qax9 .

_:node1chi8o4qax9 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "ARE" .

<http://telegraphis.net/data/countries/AE#AE> code:hasCode _:node1chi8o4qax10 .

_:node1chi8o4qax10 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "784" .

<http://telegraphis.net/data/countries/AE#AE> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "United Arab Emirates"@en ;
	gn:population "4621000" ;
	owl:sameAs <http://dbpedia.org/resource/United_Arab_Emirates> , <http://sws.geonames.org/290557/> , <http://www.geonames.org/countries/#AE> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/United_Arab_Emirates> .

<http://telegraphis.net/data/countries/AF#AF> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/AF/Kabul#Kabul> ;
	geographis:currency <http://telegraphis.net/data/currencies/AFN#AFN> ;
	geographis:isoAlpha2 "AF" ;
	geographis:isoAlpha3 "AFG" ;
	geographis:isoNumeric "004" ;
	geographis:isoShortName "AFGHANISTAN"@fr , "AFGHANISTAN"@en ;
	geographis:landArea _:node1chi8o4qax11 .

_:node1chi8o4qax11 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "647500.0" .

<http://telegraphis.net/data/countries/AF#AF> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax12 .

_:node1chi8o4qax12 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "AF" .

<http://telegraphis.net/data/countries/AF#AF> code:hasCode _:node1chi8o4qax13 .

_:node1chi8o4qax13 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "AFG" .

<http://telegraphis.net/data/countries/AF#AF> code:hasCode _:node1chi8o4qax14 .

_:node1chi8o4qax14 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "004" .

<http://telegraphis.net/data/countries/AF#AF> code:hasCode _:node1chi8o4qax15 .

_:node1chi8o4qax15 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "AF" .

<http://telegraphis.net/data/countries/AF#AF> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Afghanistan"@en ;
	gn:population "32738000" ;
	owl:sameAs <http://dbpedia.org/resource/Afghanistan> , <http://sws.geonames.org/1149361/> , <http://www.geonames.org/countries/#AF> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Afghanistan> .

<http://telegraphis.net/data/countries/AG#AG> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/AG/St._John%27s#St.John%27s> ;
	geographis:currency <http://telegraphis.net/data/currencies/XCD#XCD> ;
	geographis:isoAlpha2 "AG" ;
	geographis:isoAlpha3 "ATG" ;
	geographis:isoNumeric "028" ;
	geographis:isoShortName "ANTIGUA AND BARBUDA"@en , "ANTIGUA-ET-BARBUDA"@fr ;
	geographis:landArea _:node1chi8o4qax16 .

_:node1chi8o4qax16 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "443.0" .

<http://telegraphis.net/data/countries/AG#AG> geographis:onContinent <http://telegraphis.net/data/continents/NA#NA> ;
	code:hasCode _:node1chi8o4qax17 .

_:node1chi8o4qax17 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "AG" .

<http://telegraphis.net/data/countries/AG#AG> code:hasCode _:node1chi8o4qax18 .

_:node1chi8o4qax18 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "ATG" .

<http://telegraphis.net/data/countries/AG#AG> code:hasCode _:node1chi8o4qax19 .

_:node1chi8o4qax19 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "028" .

<http://telegraphis.net/data/countries/AG#AG> code:hasCode _:node1chi8o4qax20 .

_:node1chi8o4qax20 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "AC" .

<http://telegraphis.net/data/countries/AG#AG> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Antigua and Barbuda"@en ;
	gn:population "69000" ;
	owl:sameAs <http://dbpedia.org/resource/Antigua_and_Barbuda> , <http://sws.geonames.org/3576396/> , <http://www.geonames.org/countries/#AG> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Antigua_and_Barbuda> .

<http://telegraphis.net/data/countries/AI#AI> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/AI/The_Valley#TheValley> ;
	geographis:currency <http://telegraphis.net/data/currencies/XCD#XCD> ;
	geographis:isoAlpha2 "AI" ;
	geographis:isoAlpha3 "AIA" ;
	geographis:isoNumeric "660" ;
	geographis:isoShortName "ANGUILLA"@fr , "ANGUILLA"@en ;
	geographis:landArea _:node1chi8o4qax21 .

_:node1chi8o4qax21 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "102.0" .

<http://telegraphis.net/data/countries/AI#AI> geographis:onContinent <http://telegraphis.net/data/continents/NA#NA> ;
	code:hasCode _:node1chi8o4qax22 .

_:node1chi8o4qax22 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "AI" .

<http://telegraphis.net/data/countries/AI#AI> code:hasCode _:node1chi8o4qax23 .

_:node1chi8o4qax23 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "AIA" .

<http://telegraphis.net/data/countries/AI#AI> code:hasCode _:node1chi8o4qax24 .

_:node1chi8o4qax24 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "660" .

<http://telegraphis.net/data/countries/AI#AI> code:hasCode _:node1chi8o4qax25 .

_:node1chi8o4qax25 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "AV" .

<http://telegraphis.net/data/countries/AI#AI> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Anguilla"@en ;
	gn:population "13254" ;
	owl:sameAs <http://dbpedia.org/resource/Anguilla> , <http://sws.geonames.org/3573511/> , <http://www.geonames.org/countries/#AI> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Anguilla> .

<http://telegraphis.net/data/countries/AL#AL> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/AL/Tirana#Tirana> ;
	geographis:currency <http://telegraphis.net/data/currencies/ALL#ALL> ;
	geographis:isoAlpha2 "AL" ;
	geographis:isoAlpha3 "ALB" ;
	geographis:isoNumeric "008" ;
	geographis:isoShortName "ALBANIA"@en , "ALBANIE"@fr ;
	geographis:landArea _:node1chi8o4qax26 .

_:node1chi8o4qax26 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "28748.0" .

<http://telegraphis.net/data/countries/AL#AL> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax27 .

_:node1chi8o4qax27 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "AL" .

<http://telegraphis.net/data/countries/AL#AL> code:hasCode _:node1chi8o4qax28 .

_:node1chi8o4qax28 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "ALB" .

<http://telegraphis.net/data/countries/AL#AL> code:hasCode _:node1chi8o4qax29 .

_:node1chi8o4qax29 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "008" .

<http://telegraphis.net/data/countries/AL#AL> code:hasCode _:node1chi8o4qax30 .

_:node1chi8o4qax30 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "AL" .

<http://telegraphis.net/data/countries/AL#AL> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Albania"@en ;
	gn:population "3619000" ;
	owl:sameAs <http://dbpedia.org/resource/Albania> , <http://sws.geonames.org/783754/> , <http://www.geonames.org/countries/#AL> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Albania> .

<http://telegraphis.net/data/countries/AM#AM> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/AM/Yerevan#Yerevan> ;
	geographis:currency <http://telegraphis.net/data/currencies/AMD#AMD> ;
	geographis:isoAlpha2 "AM" ;
	geographis:isoAlpha3 "ARM" ;
	geographis:isoNumeric "051" ;
	geographis:isoShortName "ARMENIA"@en , "ARMÉNIE"@fr ;
	geographis:landArea _:node1chi8o4qax31 .

_:node1chi8o4qax31 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "29800.0" .

<http://telegraphis.net/data/countries/AM#AM> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax32 .

_:node1chi8o4qax32 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "AM" .

<http://telegraphis.net/data/countries/AM#AM> code:hasCode _:node1chi8o4qax33 .

_:node1chi8o4qax33 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "ARM" .

<http://telegraphis.net/data/countries/AM#AM> code:hasCode _:node1chi8o4qax34 .

_:node1chi8o4qax34 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "051" .

<http://telegraphis.net/data/countries/AM#AM> code:hasCode _:node1chi8o4qax35 .

_:node1chi8o4qax35 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "AM" .

<http://telegraphis.net/data/countries/AM#AM> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Armenia"@en ;
	gn:population "2968000" ;
	owl:sameAs <http://dbpedia.org/resource/Armenia> , <http://sws.geonames.org/174982/> , <http://www.geonames.org/countries/#AM> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Armenia> .

<http://telegraphis.net/data/countries/AN#AN> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/AN/Willemstad#Willemstad> ;
	geographis:currency <http://telegraphis.net/data/currencies/ANG#ANG> ;
	geographis:isoAlpha2 "AN" ;
	geographis:isoAlpha3 "ANT" ;
	geographis:isoNumeric "530" ;
	geographis:isoShortName "ANTILLES NÉERLANDAISES"@fr , "NETHERLANDS ANTILLES"@en ;
	geographis:landArea _:node1chi8o4qax36 .

_:node1chi8o4qax36 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "960.0" .

<http://telegraphis.net/data/countries/AN#AN> geographis:onContinent <http://telegraphis.net/data/continents/NA#NA> ;
	code:hasCode _:node1chi8o4qax37 .

_:node1chi8o4qax37 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "AN" .

<http://telegraphis.net/data/countries/AN#AN> code:hasCode _:node1chi8o4qax38 .

_:node1chi8o4qax38 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "ANT" .

<http://telegraphis.net/data/countries/AN#AN> code:hasCode _:node1chi8o4qax39 .

_:node1chi8o4qax39 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "530" .

<http://telegraphis.net/data/countries/AN#AN> code:hasCode _:node1chi8o4qax40 .

_:node1chi8o4qax40 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "NT" .

<http://telegraphis.net/data/countries/AN#AN> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Netherlands Antilles"@en ;
	gn:population "136197" ;
	owl:sameAs <http://dbpedia.org/resource/Netherlands_Antilles> , <http://sws.geonames.org/3513447/> , <http://www.geonames.org/countries/#AN> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Netherlands_Antilles> .

<http://telegraphis.net/data/countries/AO#AO> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/AO/Luanda#Luanda> ;
	geographis:currency <http://telegraphis.net/data/currencies/AOA#AOA> ;
	geographis:isoAlpha2 "AO" ;
	geographis:isoAlpha3 "AGO" ;
	geographis:isoNumeric "024" ;
	geographis:isoShortName "ANGOLA"@fr , "ANGOLA"@en ;
	geographis:landArea _:node1chi8o4qax41 .

_:node1chi8o4qax41 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "1246700.0" .

<http://telegraphis.net/data/countries/AO#AO> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax42 .

_:node1chi8o4qax42 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "AO" .

<http://telegraphis.net/data/countries/AO#AO> code:hasCode _:node1chi8o4qax43 .

_:node1chi8o4qax43 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "AGO" .

<http://telegraphis.net/data/countries/AO#AO> code:hasCode _:node1chi8o4qax44 .

_:node1chi8o4qax44 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "024" .

<http://telegraphis.net/data/countries/AO#AO> code:hasCode _:node1chi8o4qax45 .

_:node1chi8o4qax45 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "AO" .

<http://telegraphis.net/data/countries/AO#AO> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Angola"@en ;
	gn:population "12531000" ;
	owl:sameAs <http://dbpedia.org/resource/Angola> , <http://sws.geonames.org/3351879/> , <http://www.geonames.org/countries/#AO> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Angola> .

<http://telegraphis.net/data/countries/AQ#AQ> a gn:Country ;
	geographis:isoAlpha2 "AQ" ;
	geographis:isoAlpha3 "ATA" ;
	geographis:isoNumeric "010" ;
	geographis:isoShortName "ANTARCTICA"@en , "ANTARCTIQUE"@fr ;
	geographis:landArea _:node1chi8o4qax46 .

_:node1chi8o4qax46 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "14000000.0" .

<http://telegraphis.net/data/countries/AQ#AQ> geographis:onContinent <http://telegraphis.net/data/continents/AN#AN> ;
	code:hasCode _:node1chi8o4qax47 .

_:node1chi8o4qax47 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "AQ" .

<http://telegraphis.net/data/countries/AQ#AQ> code:hasCode _:node1chi8o4qax48 .

_:node1chi8o4qax48 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "ATA" .

<http://telegraphis.net/data/countries/AQ#AQ> code:hasCode _:node1chi8o4qax49 .

_:node1chi8o4qax49 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "010" .

<http://telegraphis.net/data/countries/AQ#AQ> code:hasCode _:node1chi8o4qax50 .

_:node1chi8o4qax50 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "AY" .

<http://telegraphis.net/data/countries/AQ#AQ> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Antarctica"@en ;
	gn:population "0" ;
	owl:sameAs <http://dbpedia.org/resource/Antarctica> , <http://sws.geonames.org/6697173/> , <http://www.geonames.org/countries/#AQ> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Antarctica> .

<http://telegraphis.net/data/countries/AR#AR> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/AR/Buenos_Aires#BuenosAires> ;
	geographis:currency <http://telegraphis.net/data/currencies/ARS#ARS> ;
	geographis:isoAlpha2 "AR" ;
	geographis:isoAlpha3 "ARG" ;
	geographis:isoNumeric "032" ;
	geographis:isoShortName "ARGENTINA"@en , "ARGENTINE"@fr ;
	geographis:landArea _:node1chi8o4qax51 .

_:node1chi8o4qax51 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "2766890.0" .

<http://telegraphis.net/data/countries/AR#AR> geographis:onContinent <http://telegraphis.net/data/continents/SA#SA> ;
	code:hasCode _:node1chi8o4qax52 .

_:node1chi8o4qax52 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "AR" .

<http://telegraphis.net/data/countries/AR#AR> code:hasCode _:node1chi8o4qax53 .

_:node1chi8o4qax53 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "ARG" .

<http://telegraphis.net/data/countries/AR#AR> code:hasCode _:node1chi8o4qax54 .

_:node1chi8o4qax54 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "032" .

<http://telegraphis.net/data/countries/AR#AR> code:hasCode _:node1chi8o4qax55 .

_:node1chi8o4qax55 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "AR" .

<http://telegraphis.net/data/countries/AR#AR> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Argentina"@en ;
	gn:population "40677000" ;
	owl:sameAs <http://dbpedia.org/resource/Argentina> , <http://sws.geonames.org/3865483/> , <http://www.geonames.org/countries/#AR> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Argentina> .

<http://telegraphis.net/data/countries/AS#AS> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/AS/Pago_Pago#PagoPago> ;
	geographis:currency <http://telegraphis.net/data/currencies/USD#USD> ;
	geographis:isoAlpha2 "AS" ;
	geographis:isoAlpha3 "ASM" ;
	geographis:isoNumeric "016" ;
	geographis:isoShortName "AMERICAN SAMOA"@en , "SAMOA AMÉRICAINES"@fr ;
	geographis:landArea _:node1chi8o4qax56 .

_:node1chi8o4qax56 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "199.0" .

<http://telegraphis.net/data/countries/AS#AS> geographis:onContinent <http://telegraphis.net/data/continents/OC#OC> ;
	code:hasCode _:node1chi8o4qax57 .

_:node1chi8o4qax57 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "AS" .

<http://telegraphis.net/data/countries/AS#AS> code:hasCode _:node1chi8o4qax58 .

_:node1chi8o4qax58 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "ASM" .

<http://telegraphis.net/data/countries/AS#AS> code:hasCode _:node1chi8o4qax59 .

_:node1chi8o4qax59 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "016" .

<http://telegraphis.net/data/countries/AS#AS> code:hasCode _:node1chi8o4qax60 .

_:node1chi8o4qax60 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "AQ" .

<http://telegraphis.net/data/countries/AS#AS> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "American Samoa"@en ;
	gn:population "57881" ;
	owl:sameAs <http://dbpedia.org/resource/American_Samoa> , <http://sws.geonames.org/5880801/> , <http://www.geonames.org/countries/#AS> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/American_Samoa> .

<http://telegraphis.net/data/countries/AT#AT> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/AT/Vienna#Vienna> ;
	geographis:currency <http://telegraphis.net/data/currencies/EUR#EUR> ;
	geographis:isoAlpha2 "AT" ;
	geographis:isoAlpha3 "AUT" ;
	geographis:isoNumeric "040" ;
	geographis:isoShortName "AUSTRIA"@en , "AUTRICHE"@fr ;
	geographis:landArea _:node1chi8o4qax61 .

_:node1chi8o4qax61 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "83858.0" .

<http://telegraphis.net/data/countries/AT#AT> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax62 .

_:node1chi8o4qax62 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "AT" .

<http://telegraphis.net/data/countries/AT#AT> code:hasCode _:node1chi8o4qax63 .

_:node1chi8o4qax63 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "AUT" .

<http://telegraphis.net/data/countries/AT#AT> code:hasCode _:node1chi8o4qax64 .

_:node1chi8o4qax64 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "040" .

<http://telegraphis.net/data/countries/AT#AT> code:hasCode _:node1chi8o4qax65 .

_:node1chi8o4qax65 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "AU" .

<http://telegraphis.net/data/countries/AT#AT> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Austria"@en ;
	gn:population "8205000" ;
	owl:sameAs <http://dbpedia.org/resource/Austria> , <http://sws.geonames.org/2782113/> , <http://www.geonames.org/countries/#AT> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Austria> .

<http://telegraphis.net/data/countries/AU#AU> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/AU/Canberra#Canberra> ;
	geographis:currency <http://telegraphis.net/data/currencies/AUD#AUD> ;
	geographis:isoAlpha2 "AU" ;
	geographis:isoAlpha3 "AUS" ;
	geographis:isoNumeric "036" ;
	geographis:isoShortName "AUSTRALIA"@en , "AUSTRALIE"@fr ;
	geographis:landArea _:node1chi8o4qax66 .

_:node1chi8o4qax66 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "7686850.0" .

<http://telegraphis.net/data/countries/AU#AU> geographis:onContinent <http://telegraphis.net/data/continents/OC#OC> ;
	code:hasCode _:node1chi8o4qax67 .

_:node1chi8o4qax67 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "AU" .

<http://telegraphis.net/data/countries/AU#AU> code:hasCode _:node1chi8o4qax68 .

_:node1chi8o4qax68 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "AUS" .

<http://telegraphis.net/data/countries/AU#AU> code:hasCode _:node1chi8o4qax69 .

_:node1chi8o4qax69 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "036" .

<http://telegraphis.net/data/countries/AU#AU> code:hasCode _:node1chi8o4qax70 .

_:node1chi8o4qax70 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "AS" .

<http://telegraphis.net/data/countries/AU#AU> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Australia"@en ;
	gn:population "20600000" ;
	owl:sameAs <http://dbpedia.org/resource/Australia> , <http://sws.geonames.org/2077456/> , <http://www.geonames.org/countries/#AU> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Australia> .

<http://telegraphis.net/data/countries/AW#AW> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/AW/Oranjestad#Oranjestad> ;
	geographis:currency <http://telegraphis.net/data/currencies/AWG#AWG> ;
	geographis:isoAlpha2 "AW" ;
	geographis:isoAlpha3 "ABW" ;
	geographis:isoNumeric "533" ;
	geographis:isoShortName "ARUBA"@fr , "ARUBA"@en ;
	geographis:landArea _:node1chi8o4qax71 .

_:node1chi8o4qax71 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "193.0" .

<http://telegraphis.net/data/countries/AW#AW> geographis:onContinent <http://telegraphis.net/data/continents/NA#NA> ;
	code:hasCode _:node1chi8o4qax72 .

_:node1chi8o4qax72 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "AW" .

<http://telegraphis.net/data/countries/AW#AW> code:hasCode _:node1chi8o4qax73 .

_:node1chi8o4qax73 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "ABW" .

<http://telegraphis.net/data/countries/AW#AW> code:hasCode _:node1chi8o4qax74 .

_:node1chi8o4qax74 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "533" .

<http://telegraphis.net/data/countries/AW#AW> code:hasCode _:node1chi8o4qax75 .

_:node1chi8o4qax75 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "AA" .

<http://telegraphis.net/data/countries/AW#AW> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Aruba"@en ;
	gn:population "71566" ;
	owl:sameAs <http://dbpedia.org/resource/Aruba> , <http://sws.geonames.org/3577279/> , <http://www.geonames.org/countries/#AW> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Aruba> .

<http://telegraphis.net/data/countries/AX#AX> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/AX/Mariehamn#Mariehamn> ;
	geographis:isoAlpha2 "AX" ;
	geographis:isoAlpha3 "ALA" ;
	geographis:isoNumeric "248" ;
	geographis:isoShortName "ÅLAND ISLANDS"@en , "ÅLAND, ÎLES"@fr ;
	geographis:landArea _:node1chi8o4qax76 .

_:node1chi8o4qax76 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "None" .

<http://telegraphis.net/data/countries/AX#AX> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax77 .

_:node1chi8o4qax77 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "AX" .

<http://telegraphis.net/data/countries/AX#AX> code:hasCode _:node1chi8o4qax78 .

_:node1chi8o4qax78 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "ALA" .

<http://telegraphis.net/data/countries/AX#AX> code:hasCode _:node1chi8o4qax79 .

_:node1chi8o4qax79 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "248" .

<http://telegraphis.net/data/countries/AX#AX> code:hasCode _:node1chi8o4qax80 .

_:node1chi8o4qax80 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "None" .

<http://telegraphis.net/data/countries/AX#AX> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Aland Islands"@en ;
	gn:population "26711" ;
	owl:sameAs <http://dbpedia.org/resource/%C3%85land_Islands> , <http://sws.geonames.org/661882/> , <http://www.geonames.org/countries/#AX> .

<http://telegraphis.net/data/countries/AZ#AZ> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/AZ/Baku#Baku> ;
	geographis:currency <http://telegraphis.net/data/currencies/AZN#AZN> ;
	geographis:isoAlpha2 "AZ" ;
	geographis:isoAlpha3 "AZE" ;
	geographis:isoNumeric "031" ;
	geographis:isoShortName "AZERBAIJAN"@en , "AZERBAÏDJAN"@fr ;
	geographis:landArea _:node1chi8o4qax81 .

_:node1chi8o4qax81 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "86600.0" .

<http://telegraphis.net/data/countries/AZ#AZ> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax82 .

_:node1chi8o4qax82 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "AZ" .

<http://telegraphis.net/data/countries/AZ#AZ> code:hasCode _:node1chi8o4qax83 .

_:node1chi8o4qax83 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "AZE" .

<http://telegraphis.net/data/countries/AZ#AZ> code:hasCode _:node1chi8o4qax84 .

_:node1chi8o4qax84 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "031" .

<http://telegraphis.net/data/countries/AZ#AZ> code:hasCode _:node1chi8o4qax85 .

_:node1chi8o4qax85 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "AJ" .

<http://telegraphis.net/data/countries/AZ#AZ> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Azerbaijan"@en ;
	gn:population "8177000" ;
	owl:sameAs <http://dbpedia.org/resource/Azerbaijan> , <http://sws.geonames.org/587116/> , <http://www.geonames.org/countries/#AZ> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Azerbaijan> .

<http://telegraphis.net/data/countries/BA#BA> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/BA/Sarajevo#Sarajevo> ;
	geographis:currency <http://telegraphis.net/data/currencies/BAM#BAM> ;
	geographis:isoAlpha2 "BA" ;
	geographis:isoAlpha3 "BIH" ;
	geographis:isoNumeric "070" ;
	geographis:isoShortName "BOSNIA AND HERZEGOVINA"@en , "BOSNIE-HERZÉGOVINE"@fr ;
	geographis:landArea _:node1chi8o4qax86 .

_:node1chi8o4qax86 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "51129.0" .

<http://telegraphis.net/data/countries/BA#BA> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax87 .

_:node1chi8o4qax87 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "BA" .

<http://telegraphis.net/data/countries/BA#BA> code:hasCode _:node1chi8o4qax88 .

_:node1chi8o4qax88 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "BIH" .

<http://telegraphis.net/data/countries/BA#BA> code:hasCode _:node1chi8o4qax89 .

_:node1chi8o4qax89 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "070" .

<http://telegraphis.net/data/countries/BA#BA> code:hasCode _:node1chi8o4qax90 .

_:node1chi8o4qax90 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "BK" .

<http://telegraphis.net/data/countries/BA#BA> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Bosnia and Herzegovina"@en ;
	gn:population "4590000" ;
	owl:sameAs <http://dbpedia.org/resource/Bosnia_and_Herzegovina> , <http://sws.geonames.org/3277605/> , <http://www.geonames.org/countries/#BA> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Bosnia_and_Herzegovina> .

<http://telegraphis.net/data/countries/BB#BB> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/BB/Bridgetown#Bridgetown> ;
	geographis:currency <http://telegraphis.net/data/currencies/BBD#BBD> ;
	geographis:isoAlpha2 "BB" ;
	geographis:isoAlpha3 "BRB" ;
	geographis:isoNumeric "052" ;
	geographis:isoShortName "BARBADE"@fr , "BARBADOS"@en ;
	geographis:landArea _:node1chi8o4qax91 .

_:node1chi8o4qax91 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "431.0" .

<http://telegraphis.net/data/countries/BB#BB> geographis:onContinent <http://telegraphis.net/data/continents/NA#NA> ;
	code:hasCode _:node1chi8o4qax92 .

_:node1chi8o4qax92 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "BB" .

<http://telegraphis.net/data/countries/BB#BB> code:hasCode _:node1chi8o4qax93 .

_:node1chi8o4qax93 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "BRB" .

<http://telegraphis.net/data/countries/BB#BB> code:hasCode _:node1chi8o4qax94 .

_:node1chi8o4qax94 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "052" .

<http://telegraphis.net/data/countries/BB#BB> code:hasCode _:node1chi8o4qax95 .

_:node1chi8o4qax95 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "BB" .

<http://telegraphis.net/data/countries/BB#BB> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Barbados"@en ;
	gn:population "281000" ;
	owl:sameAs <http://dbpedia.org/resource/Barbados> , <http://sws.geonames.org/3374084/> , <http://www.geonames.org/countries/#BB> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Barbados> .

<http://telegraphis.net/data/countries/BD#BD> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/BD/Dhaka#Dhaka> ;
	geographis:currency <http://telegraphis.net/data/currencies/BDT#BDT> ;
	geographis:isoAlpha2 "BD" ;
	geographis:isoAlpha3 "BGD" ;
	geographis:isoNumeric "050" ;
	geographis:isoShortName "BANGLADESH"@fr , "BANGLADESH"@en ;
	geographis:landArea _:node1chi8o4qax96 .

_:node1chi8o4qax96 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "144000.0" .

<http://telegraphis.net/data/countries/BD#BD> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax97 .

_:node1chi8o4qax97 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "BG" .

<http://telegraphis.net/data/countries/BD#BD> code:hasCode _:node1chi8o4qax98 .

_:node1chi8o4qax98 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "BD" .

<http://telegraphis.net/data/countries/BD#BD> code:hasCode _:node1chi8o4qax99 .

_:node1chi8o4qax99 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "BGD" .

<http://telegraphis.net/data/countries/BD#BD> code:hasCode _:node1chi8o4qax100 .

_:node1chi8o4qax100 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "050" .

<http://telegraphis.net/data/countries/BD#BD> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Bangladesh"@en ;
	gn:population "153546000" ;
	owl:sameAs <http://dbpedia.org/resource/Bangladesh> , <http://sws.geonames.org/1210997/> , <http://www.geonames.org/countries/#BD> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Bangladesh> .

<http://telegraphis.net/data/countries/BE#BE> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/BE/Brussels#Brussels> ;
	geographis:currency <http://telegraphis.net/data/currencies/EUR#EUR> ;
	geographis:isoAlpha2 "BE" ;
	geographis:isoAlpha3 "BEL" ;
	geographis:isoNumeric "056" ;
	geographis:isoShortName "BELGIQUE"@fr , "BELGIUM"@en ;
	geographis:landArea _:node1chi8o4qax101 .

_:node1chi8o4qax101 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "30510.0" .

<http://telegraphis.net/data/countries/BE#BE> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax102 .

_:node1chi8o4qax102 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "BE" .

<http://telegraphis.net/data/countries/BE#BE> code:hasCode _:node1chi8o4qax103 .

_:node1chi8o4qax103 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "BEL" .

<http://telegraphis.net/data/countries/BE#BE> code:hasCode _:node1chi8o4qax104 .

_:node1chi8o4qax104 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "056" .

<http://telegraphis.net/data/countries/BE#BE> code:hasCode _:node1chi8o4qax105 .

_:node1chi8o4qax105 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "BE" .

<http://telegraphis.net/data/countries/BE#BE> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Belgium"@en ;
	gn:population "10403000" ;
	owl:sameAs <http://dbpedia.org/resource/Belgium> , <http://sws.geonames.org/2802361/> , <http://www.geonames.org/countries/#BE> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Belgium> .

<http://telegraphis.net/data/countries/BF#BF> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/BF/Ouagadougou#Ouagadougou> ;
	geographis:currency <http://telegraphis.net/data/currencies/XOF#XOF> ;
	geographis:isoAlpha2 "BF" ;
	geographis:isoAlpha3 "BFA" ;
	geographis:isoNumeric "854" ;
	geographis:isoShortName "BURKINA FASO"@fr , "BURKINA FASO"@en ;
	geographis:landArea _:node1chi8o4qax106 .

_:node1chi8o4qax106 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "274200.0" .

<http://telegraphis.net/data/countries/BF#BF> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax107 .

_:node1chi8o4qax107 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "BF" .

<http://telegraphis.net/data/countries/BF#BF> code:hasCode _:node1chi8o4qax108 .

_:node1chi8o4qax108 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "BFA" .

<http://telegraphis.net/data/countries/BF#BF> code:hasCode _:node1chi8o4qax109 .

_:node1chi8o4qax109 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "854" .

<http://telegraphis.net/data/countries/BF#BF> code:hasCode _:node1chi8o4qax110 .

_:node1chi8o4qax110 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "UV" .

<http://telegraphis.net/data/countries/BF#BF> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Burkina Faso"@en ;
	gn:population "14761000" ;
	owl:sameAs <http://dbpedia.org/resource/Burkina_Faso> , <http://sws.geonames.org/2361809/> , <http://www.geonames.org/countries/#BF> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Burkina_Faso> .

<http://telegraphis.net/data/countries/BG#BG> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/BG/Sofia#Sofia> ;
	geographis:currency <http://telegraphis.net/data/currencies/BGN#BGN> ;
	geographis:isoAlpha2 "BG" ;
	geographis:isoAlpha3 "BGR" ;
	geographis:isoNumeric "100" ;
	geographis:isoShortName "BULGARIA"@en , "BULGARIE"@fr ;
	geographis:landArea _:node1chi8o4qax111 .

_:node1chi8o4qax111 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "110910.0" .

<http://telegraphis.net/data/countries/BG#BG> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax112 .

_:node1chi8o4qax112 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "BG" .

<http://telegraphis.net/data/countries/BG#BG> code:hasCode _:node1chi8o4qax113 .

_:node1chi8o4qax113 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "BGR" .

<http://telegraphis.net/data/countries/BG#BG> code:hasCode _:node1chi8o4qax114 .

_:node1chi8o4qax114 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "100" .

<http://telegraphis.net/data/countries/BG#BG> code:hasCode _:node1chi8o4qax115 .

_:node1chi8o4qax115 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "BU" .

<http://telegraphis.net/data/countries/BG#BG> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Bulgaria"@en ;
	gn:population "7262000" ;
	owl:sameAs <http://dbpedia.org/resource/Bulgaria> , <http://sws.geonames.org/732800/> , <http://www.geonames.org/countries/#BG> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Bulgaria> .

<http://telegraphis.net/data/countries/BH#BH> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/BH/Manama#Manama> ;
	geographis:currency <http://telegraphis.net/data/currencies/BHD#BHD> ;
	geographis:isoAlpha2 "BH" ;
	geographis:isoAlpha3 "BHR" ;
	geographis:isoNumeric "048" ;
	geographis:isoShortName "BAHRAIN"@en , "BAHREÏN"@fr ;
	geographis:landArea _:node1chi8o4qax116 .

_:node1chi8o4qax116 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "665.0" .

<http://telegraphis.net/data/countries/BH#BH> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax117 .

_:node1chi8o4qax117 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "BH" .

<http://telegraphis.net/data/countries/BH#BH> code:hasCode _:node1chi8o4qax118 .

_:node1chi8o4qax118 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "BHR" .

<http://telegraphis.net/data/countries/BH#BH> code:hasCode _:node1chi8o4qax119 .

_:node1chi8o4qax119 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "048" .

<http://telegraphis.net/data/countries/BH#BH> code:hasCode _:node1chi8o4qax120 .

_:node1chi8o4qax120 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "BA" .

<http://telegraphis.net/data/countries/BH#BH> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Bahrain"@en ;
	gn:population "718000" ;
	owl:sameAs <http://dbpedia.org/resource/Bahrain> , <http://sws.geonames.org/290291/> , <http://www.geonames.org/countries/#BH> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Bahrain> .

<http://telegraphis.net/data/countries/BI#BI> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/BI/Bujumbura#Bujumbura> ;
	geographis:currency <http://telegraphis.net/data/currencies/BIF#BIF> ;
	geographis:isoAlpha2 "BI" ;
	geographis:isoAlpha3 "BDI" ;
	geographis:isoNumeric "108" ;
	geographis:isoShortName "BURUNDI"@fr , "BURUNDI"@en ;
	geographis:landArea _:node1chi8o4qax121 .

_:node1chi8o4qax121 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "27830.0" .

<http://telegraphis.net/data/countries/BI#BI> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax122 .

_:node1chi8o4qax122 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "BI" .

<http://telegraphis.net/data/countries/BI#BI> code:hasCode _:node1chi8o4qax123 .

_:node1chi8o4qax123 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "BDI" .

<http://telegraphis.net/data/countries/BI#BI> code:hasCode _:node1chi8o4qax124 .

_:node1chi8o4qax124 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "108" .

<http://telegraphis.net/data/countries/BI#BI> code:hasCode _:node1chi8o4qax125 .

_:node1chi8o4qax125 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "BY" .

<http://telegraphis.net/data/countries/BI#BI> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Burundi"@en ;
	gn:population "8691000" ;
	owl:sameAs <http://dbpedia.org/resource/Burundi> , <http://sws.geonames.org/433561/> , <http://www.geonames.org/countries/#BI> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Burundi> .

<http://telegraphis.net/data/countries/BJ#BJ> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/BJ/Porto-Novo#PortoNovo> ;
	geographis:currency <http://telegraphis.net/data/currencies/XOF#XOF> ;
	geographis:isoAlpha2 "BJ" ;
	geographis:isoAlpha3 "BEN" ;
	geographis:isoNumeric "204" ;
	geographis:isoShortName "BENIN"@en , "BÉNIN"@fr ;
	geographis:landArea _:node1chi8o4qax126 .

_:node1chi8o4qax126 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "112620.0" .

<http://telegraphis.net/data/countries/BJ#BJ> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax127 .

_:node1chi8o4qax127 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "BJ" .

<http://telegraphis.net/data/countries/BJ#BJ> code:hasCode _:node1chi8o4qax128 .

_:node1chi8o4qax128 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "BEN" .

<http://telegraphis.net/data/countries/BJ#BJ> code:hasCode _:node1chi8o4qax129 .

_:node1chi8o4qax129 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "204" .

<http://telegraphis.net/data/countries/BJ#BJ> code:hasCode _:node1chi8o4qax130 .

_:node1chi8o4qax130 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "BN" .

<http://telegraphis.net/data/countries/BJ#BJ> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Benin"@en ;
	gn:population "8294000" ;
	owl:sameAs <http://dbpedia.org/resource/Benin> , <http://sws.geonames.org/2395170/> , <http://www.geonames.org/countries/#BJ> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Benin> .

<http://telegraphis.net/data/countries/BL#BL> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/BL/Gustavia#Gustavia> ;
	geographis:isoAlpha2 "BL" ;
	geographis:isoAlpha3 "BLM" ;
	geographis:isoNumeric "652" ;
	geographis:isoShortName "SAINT BARTHÉLEMY"@en , "SAINT-BARTHÉLEMY"@fr ;
	geographis:landArea _:node1chi8o4qax131 .

_:node1chi8o4qax131 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "21.0" .

<http://telegraphis.net/data/countries/BL#BL> geographis:onContinent <http://telegraphis.net/data/continents/NA#NA> ;
	code:hasCode _:node1chi8o4qax132 .

_:node1chi8o4qax132 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "BL" .

<http://telegraphis.net/data/countries/BL#BL> code:hasCode _:node1chi8o4qax133 .

_:node1chi8o4qax133 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "BLM" .

<http://telegraphis.net/data/countries/BL#BL> code:hasCode _:node1chi8o4qax134 .

_:node1chi8o4qax134 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "652" .

<http://telegraphis.net/data/countries/BL#BL> code:hasCode _:node1chi8o4qax135 .

_:node1chi8o4qax135 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "TB" .

<http://telegraphis.net/data/countries/BL#BL> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Saint Barthélemy"@en ;
	gn:population "8450" ;
	owl:sameAs <http://dbpedia.org/resource/Saint_Barth%C3%A9lemy> , <http://sws.geonames.org/3578476/> , <http://www.geonames.org/countries/#BL> .

<http://telegraphis.net/data/countries/BM#BM> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/BM/Hamilton#Hamilton> ;
	geographis:currency <http://telegraphis.net/data/currencies/BMD#BMD> , <http://telegraphis.net/data/currencies/USD#USD> ;
	geographis:isoAlpha2 "BM" ;
	geographis:isoAlpha3 "BMU" ;
	geographis:isoNumeric "060" ;
	geographis:isoShortName "BERMUDA"@en , "BERMUDES"@fr ;
	geographis:landArea _:node1chi8o4qax136 .

_:node1chi8o4qax136 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "53.0" .

<http://telegraphis.net/data/countries/BM#BM> geographis:onContinent <http://telegraphis.net/data/continents/NA#NA> ;
	code:hasCode _:node1chi8o4qax137 .

_:node1chi8o4qax137 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "BM" .

<http://telegraphis.net/data/countries/BM#BM> code:hasCode _:node1chi8o4qax138 .

_:node1chi8o4qax138 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "BMU" .

<http://telegraphis.net/data/countries/BM#BM> code:hasCode _:node1chi8o4qax139 .

_:node1chi8o4qax139 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "060" .

<http://telegraphis.net/data/countries/BM#BM> code:hasCode _:node1chi8o4qax140 .

_:node1chi8o4qax140 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "BD" .

<http://telegraphis.net/data/countries/BM#BM> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Bermuda"@en ;
	gn:population "65365" ;
	owl:sameAs <http://dbpedia.org/resource/Bermuda> , <http://sws.geonames.org/3573345/> , <http://www.geonames.org/countries/#BM> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Bermuda> .

<http://telegraphis.net/data/countries/BN#BN> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/BN/Bandar_Seri_Begawan#BandarSeriBegawan> ;
	geographis:currency <http://telegraphis.net/data/currencies/BND#BND> , <http://telegraphis.net/data/currencies/SGD#SGD> ;
	geographis:isoAlpha2 "BN" ;
	geographis:isoAlpha3 "BRN" ;
	geographis:isoNumeric "096" ;
	geographis:isoShortName "BRUNEI DARUSSALAM"@en , "BRUNÉI DARUSSALAM"@fr ;
	geographis:landArea _:node1chi8o4qax141 .

_:node1chi8o4qax141 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "5770.0" .

<http://telegraphis.net/data/countries/BN#BN> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax142 .

_:node1chi8o4qax142 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "BN" .

<http://telegraphis.net/data/countries/BN#BN> code:hasCode _:node1chi8o4qax143 .

_:node1chi8o4qax143 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "BRN" .

<http://telegraphis.net/data/countries/BN#BN> code:hasCode _:node1chi8o4qax144 .

_:node1chi8o4qax144 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "096" .

<http://telegraphis.net/data/countries/BN#BN> code:hasCode _:node1chi8o4qax145 .

_:node1chi8o4qax145 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "BX" .

<http://telegraphis.net/data/countries/BN#BN> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Brunei"@en ;
	gn:population "381000" ;
	owl:sameAs <http://dbpedia.org/resource/Brunei> , <http://sws.geonames.org/1820814/> , <http://www.geonames.org/countries/#BN> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Brunei> .

<http://telegraphis.net/data/countries/BO#BO> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/BO/La_Paz#LaPaz> ;
	geographis:currency <http://telegraphis.net/data/currencies/BOB#BOB> , <http://telegraphis.net/data/currencies/BOV#BOV> ;
	geographis:isoAlpha2 "BO" ;
	geographis:isoAlpha3 "BOL" ;
	geographis:isoNumeric "068" ;
	geographis:isoShortName "BOLIVIA"@en , "BOLIVIE"@fr ;
	geographis:landArea _:node1chi8o4qax146 .

_:node1chi8o4qax146 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "1098580.0" .

<http://telegraphis.net/data/countries/BO#BO> geographis:onContinent <http://telegraphis.net/data/continents/SA#SA> ;
	code:hasCode _:node1chi8o4qax147 .

_:node1chi8o4qax147 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "BO" .

<http://telegraphis.net/data/countries/BO#BO> code:hasCode _:node1chi8o4qax148 .

_:node1chi8o4qax148 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "BOL" .

<http://telegraphis.net/data/countries/BO#BO> code:hasCode _:node1chi8o4qax149 .

_:node1chi8o4qax149 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "068" .

<http://telegraphis.net/data/countries/BO#BO> code:hasCode _:node1chi8o4qax150 .

_:node1chi8o4qax150 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "BL" .

<http://telegraphis.net/data/countries/BO#BO> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Bolivia"@en ;
	gn:population "9247000" ;
	owl:sameAs <http://dbpedia.org/resource/Bolivia> , <http://sws.geonames.org/3923057/> , <http://www.geonames.org/countries/#BO> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Bolivia> .

<http://telegraphis.net/data/countries/BR#BR> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/BR/Bras%C3%ADlia#Bras%C3%ADlia> ;
	geographis:currency <http://telegraphis.net/data/currencies/BRL#BRL> ;
	geographis:isoAlpha2 "BR" ;
	geographis:isoAlpha3 "BRA" ;
	geographis:isoNumeric "076" ;
	geographis:isoShortName "BRAZIL"@en , "BRÉSIL"@fr ;
	geographis:landArea _:node1chi8o4qax151 .

_:node1chi8o4qax151 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "8511965.0" .

<http://telegraphis.net/data/countries/BR#BR> geographis:onContinent <http://telegraphis.net/data/continents/SA#SA> ;
	code:hasCode _:node1chi8o4qax152 .

_:node1chi8o4qax152 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "BR" .

<http://telegraphis.net/data/countries/BR#BR> code:hasCode _:node1chi8o4qax153 .

_:node1chi8o4qax153 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "BRA" .

<http://telegraphis.net/data/countries/BR#BR> code:hasCode _:node1chi8o4qax154 .

_:node1chi8o4qax154 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "076" .

<http://telegraphis.net/data/countries/BR#BR> code:hasCode _:node1chi8o4qax155 .

_:node1chi8o4qax155 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "BR" .

<http://telegraphis.net/data/countries/BR#BR> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Brazil"@en ;
	gn:population "191908000" ;
	owl:sameAs <http://dbpedia.org/resource/Brazil> , <http://sws.geonames.org/3469034/> , <http://www.geonames.org/countries/#BR> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Brazil> .

<http://telegraphis.net/data/countries/BS#BS> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/BS/Nassau#Nassau> ;
	geographis:currency <http://telegraphis.net/data/currencies/BSD#BSD> ;
	geographis:isoAlpha2 "BS" ;
	geographis:isoAlpha3 "BHS" ;
	geographis:isoNumeric "044" ;
	geographis:isoShortName "BAHAMAS"@fr , "BAHAMAS"@en ;
	geographis:landArea _:node1chi8o4qax156 .

_:node1chi8o4qax156 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "13940.0" .

<http://telegraphis.net/data/countries/BS#BS> geographis:onContinent <http://telegraphis.net/data/continents/NA#NA> ;
	code:hasCode _:node1chi8o4qax157 .

_:node1chi8o4qax157 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "BS" .

<http://telegraphis.net/data/countries/BS#BS> code:hasCode _:node1chi8o4qax158 .

_:node1chi8o4qax158 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "BHS" .

<http://telegraphis.net/data/countries/BS#BS> code:hasCode _:node1chi8o4qax159 .

_:node1chi8o4qax159 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "044" .

<http://telegraphis.net/data/countries/BS#BS> code:hasCode _:node1chi8o4qax160 .

_:node1chi8o4qax160 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "BF" .

<http://telegraphis.net/data/countries/BS#BS> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Bahamas"@en ;
	gn:population "301790" ;
	owl:sameAs <http://dbpedia.org/resource/The_Bahamas> , <http://sws.geonames.org/3572887/> , <http://www.geonames.org/countries/#BS> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Bahamas_The> .

<http://telegraphis.net/data/countries/BT#BT> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/BT/Thimphu#Thimphu> ;
	geographis:currency <http://telegraphis.net/data/currencies/BTN#BTN> , <http://telegraphis.net/data/currencies/INR#INR> ;
	geographis:isoAlpha2 "BT" ;
	geographis:isoAlpha3 "BTN" ;
	geographis:isoNumeric "064" ;
	geographis:isoShortName "BHOUTAN"@fr , "BHUTAN"@en ;
	geographis:landArea _:node1chi8o4qax161 .

_:node1chi8o4qax161 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "47000.0" .

<http://telegraphis.net/data/countries/BT#BT> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax162 .

_:node1chi8o4qax162 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "BT" .

<http://telegraphis.net/data/countries/BT#BT> code:hasCode _:node1chi8o4qax163 .

_:node1chi8o4qax163 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "BTN" .

<http://telegraphis.net/data/countries/BT#BT> code:hasCode _:node1chi8o4qax164 .

_:node1chi8o4qax164 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "064" .

<http://telegraphis.net/data/countries/BT#BT> code:hasCode _:node1chi8o4qax165 .

_:node1chi8o4qax165 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "BT" .

<http://telegraphis.net/data/countries/BT#BT> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Bhutan"@en ;
	gn:population "2376000" ;
	owl:sameAs <http://dbpedia.org/resource/Bhutan> , <http://sws.geonames.org/1252634/> , <http://www.geonames.org/countries/#BT> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Bhutan> .

<http://telegraphis.net/data/countries/BV#BV> a gn:Country ;
	geographis:isoAlpha2 "BV" ;
	geographis:isoAlpha3 "BVT" ;
	geographis:isoNumeric "074" ;
	geographis:isoShortName "BOUVET ISLAND"@en , "BOUVET, ÎLE"@fr ;
	geographis:landArea _:node1chi8o4qax166 .

_:node1chi8o4qax166 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "None" .

<http://telegraphis.net/data/countries/BV#BV> geographis:onContinent <http://telegraphis.net/data/continents/AN#AN> ;
	code:hasCode _:node1chi8o4qax167 .

_:node1chi8o4qax167 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "BV" .

<http://telegraphis.net/data/countries/BV#BV> code:hasCode _:node1chi8o4qax168 .

_:node1chi8o4qax168 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "BVT" .

<http://telegraphis.net/data/countries/BV#BV> code:hasCode _:node1chi8o4qax169 .

_:node1chi8o4qax169 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "074" .

<http://telegraphis.net/data/countries/BV#BV> code:hasCode _:node1chi8o4qax170 .

_:node1chi8o4qax170 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "BV" .

<http://telegraphis.net/data/countries/BV#BV> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Bouvet Island"@en ;
	gn:population "0" ;
	owl:sameAs <http://dbpedia.org/resource/Bouvet_Island> , <http://sws.geonames.org/3371123/> , <http://www.geonames.org/countries/#BV> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Bouvet_Island> .

<http://telegraphis.net/data/countries/BW#BW> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/BW/Gaborone#Gaborone> ;
	geographis:currency <http://telegraphis.net/data/currencies/BWP#BWP> ;
	geographis:isoAlpha2 "BW" ;
	geographis:isoAlpha3 "BWA" ;
	geographis:isoNumeric "072" ;
	geographis:isoShortName "BOTSWANA"@fr , "BOTSWANA"@en ;
	geographis:landArea _:node1chi8o4qax171 .

_:node1chi8o4qax171 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "600370.0" .

<http://telegraphis.net/data/countries/BW#BW> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax172 .

_:node1chi8o4qax172 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "BW" .

<http://telegraphis.net/data/countries/BW#BW> code:hasCode _:node1chi8o4qax173 .

_:node1chi8o4qax173 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "BWA" .

<http://telegraphis.net/data/countries/BW#BW> code:hasCode _:node1chi8o4qax174 .

_:node1chi8o4qax174 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "072" .

<http://telegraphis.net/data/countries/BW#BW> code:hasCode _:node1chi8o4qax175 .

_:node1chi8o4qax175 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "BC" .

<http://telegraphis.net/data/countries/BW#BW> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Botswana"@en ;
	gn:population "1842000" ;
	owl:sameAs <http://dbpedia.org/resource/Botswana> , <http://sws.geonames.org/933860/> , <http://www.geonames.org/countries/#BW> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Botswana> .

<http://telegraphis.net/data/countries/BY#BY> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/BY/Minsk#Minsk> ;
	geographis:currency <http://telegraphis.net/data/currencies/BYR#BYR> ;
	geographis:isoAlpha2 "BY" ;
	geographis:isoAlpha3 "BLR" ;
	geographis:isoNumeric "112" ;
	geographis:isoShortName "BELARUS"@en , "BÉLARUS"@fr ;
	geographis:landArea _:node1chi8o4qax176 .

_:node1chi8o4qax176 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "207600.0" .

<http://telegraphis.net/data/countries/BY#BY> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax177 .

_:node1chi8o4qax177 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "BY" .

<http://telegraphis.net/data/countries/BY#BY> code:hasCode _:node1chi8o4qax178 .

_:node1chi8o4qax178 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "BLR" .

<http://telegraphis.net/data/countries/BY#BY> code:hasCode _:node1chi8o4qax179 .

_:node1chi8o4qax179 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "112" .

<http://telegraphis.net/data/countries/BY#BY> code:hasCode _:node1chi8o4qax180 .

_:node1chi8o4qax180 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "BO" .

<http://telegraphis.net/data/countries/BY#BY> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Belarus"@en ;
	gn:population "9685000" ;
	owl:sameAs <http://dbpedia.org/resource/Belarus> , <http://sws.geonames.org/630336/> , <http://www.geonames.org/countries/#BY> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Belarus> .

<http://telegraphis.net/data/countries/BZ#BZ> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/BZ/Belmopan#Belmopan> ;
	geographis:currency <http://telegraphis.net/data/currencies/BZD#BZD> ;
	geographis:isoAlpha2 "BZ" ;
	geographis:isoAlpha3 "BLZ" ;
	geographis:isoNumeric "084" ;
	geographis:isoShortName "BELIZE"@fr , "BELIZE"@en ;
	geographis:landArea _:node1chi8o4qax181 .

_:node1chi8o4qax181 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "22966.0" .

<http://telegraphis.net/data/countries/BZ#BZ> geographis:onContinent <http://telegraphis.net/data/continents/NA#NA> ;
	code:hasCode _:node1chi8o4qax182 .

_:node1chi8o4qax182 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "BZ" .

<http://telegraphis.net/data/countries/BZ#BZ> code:hasCode _:node1chi8o4qax183 .

_:node1chi8o4qax183 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "BLZ" .

<http://telegraphis.net/data/countries/BZ#BZ> code:hasCode _:node1chi8o4qax184 .

_:node1chi8o4qax184 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "084" .

<http://telegraphis.net/data/countries/BZ#BZ> code:hasCode _:node1chi8o4qax185 .

_:node1chi8o4qax185 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "BH" .

<http://telegraphis.net/data/countries/BZ#BZ> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Belize"@en ;
	gn:population "301000" ;
	owl:sameAs <http://dbpedia.org/resource/Belize> , <http://sws.geonames.org/3582678/> , <http://www.geonames.org/countries/#BZ> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Belize> .

<http://telegraphis.net/data/countries/CA#CA> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/CA/Ottawa#Ottawa> ;
	geographis:currency <http://telegraphis.net/data/currencies/CAD#CAD> ;
	geographis:isoAlpha2 "CA" ;
	geographis:isoAlpha3 "CAN" ;
	geographis:isoNumeric "124" ;
	geographis:isoShortName "CANADA"@fr , "CANADA"@en ;
	geographis:landArea _:node1chi8o4qax186 .

_:node1chi8o4qax186 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "9984670.0" .

<http://telegraphis.net/data/countries/CA#CA> geographis:onContinent <http://telegraphis.net/data/continents/NA#NA> ;
	code:hasCode _:node1chi8o4qax187 .

_:node1chi8o4qax187 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "CA" .

<http://telegraphis.net/data/countries/CA#CA> code:hasCode _:node1chi8o4qax188 .

_:node1chi8o4qax188 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "CAN" .

<http://telegraphis.net/data/countries/CA#CA> code:hasCode _:node1chi8o4qax189 .

_:node1chi8o4qax189 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "124" .

<http://telegraphis.net/data/countries/CA#CA> code:hasCode _:node1chi8o4qax190 .

_:node1chi8o4qax190 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "CA" .

<http://telegraphis.net/data/countries/CA#CA> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Canada"@en ;
	gn:population "33679000" ;
	owl:sameAs <http://dbpedia.org/resource/Canada> , <http://sws.geonames.org/6251999/> , <http://www.geonames.org/countries/#CA> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Canada> .

<http://telegraphis.net/data/countries/CC#CC> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/CC/West_Island#WestIsland> ;
	geographis:currency <http://telegraphis.net/data/currencies/AUD#AUD> ;
	geographis:isoAlpha2 "CC" ;
	geographis:isoAlpha3 "CCK" ;
	geographis:isoNumeric "166" ;
	geographis:isoShortName "COCOS (KEELING) ISLANDS"@en , "COCOS (KEELING), ÎLES"@fr ;
	geographis:landArea _:node1chi8o4qax191 .

_:node1chi8o4qax191 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "14.0" .

<http://telegraphis.net/data/countries/CC#CC> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax192 .

_:node1chi8o4qax192 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "CC" .

<http://telegraphis.net/data/countries/CC#CC> code:hasCode _:node1chi8o4qax193 .

_:node1chi8o4qax193 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "CCK" .

<http://telegraphis.net/data/countries/CC#CC> code:hasCode _:node1chi8o4qax194 .

_:node1chi8o4qax194 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "166" .

<http://telegraphis.net/data/countries/CC#CC> code:hasCode _:node1chi8o4qax195 .

_:node1chi8o4qax195 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "CK" .

<http://telegraphis.net/data/countries/CC#CC> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Cocos Islands"@en ;
	gn:population "628" ;
	owl:sameAs <http://dbpedia.org/resource/Cocos_%28Keeling%29_Islands> , <http://sws.geonames.org/1547376/> , <http://www.geonames.org/countries/#CC> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Cocos_(Keeling)_Islands> .

<http://telegraphis.net/data/countries/CD#CD> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/CD/Kinshasa#Kinshasa> ;
	geographis:currency <http://telegraphis.net/data/currencies/CDF#CDF> ;
	geographis:isoAlpha2 "CD" ;
	geographis:isoAlpha3 "COD" ;
	geographis:isoNumeric "180" ;
	geographis:isoShortName "CONGO, LA RÉPUBLIQUE DÉMOCRATIQUE DU"@fr , "CONGO, THE DEMOCRATIC REPUBLIC OF THE"@en ;
	geographis:landArea _:node1chi8o4qax196 .

_:node1chi8o4qax196 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "2345410.0" .

<http://telegraphis.net/data/countries/CD#CD> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax197 .

_:node1chi8o4qax197 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "CD" .

<http://telegraphis.net/data/countries/CD#CD> code:hasCode _:node1chi8o4qax198 .

_:node1chi8o4qax198 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "COD" .

<http://telegraphis.net/data/countries/CD#CD> code:hasCode _:node1chi8o4qax199 .

_:node1chi8o4qax199 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "180" .

<http://telegraphis.net/data/countries/CD#CD> code:hasCode _:node1chi8o4qax200 .

_:node1chi8o4qax200 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "CG" .

<http://telegraphis.net/data/countries/CD#CD> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Congo - Kinshasa"@en ;
	gn:population "60085004" ;
	owl:sameAs <http://dbpedia.org/resource/Democratic_Republic_of_the_Congo> , <http://sws.geonames.org/203312/> , <http://www.geonames.org/countries/#CD> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Congo_Democratic_Republic_of_the> .

<http://telegraphis.net/data/countries/CF#CF> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/CF/Bangui#Bangui> ;
	geographis:currency <http://telegraphis.net/data/currencies/XAF#XAF> ;
	geographis:isoAlpha2 "CF" ;
	geographis:isoAlpha3 "CAF" ;
	geographis:isoNumeric "140" ;
	geographis:isoShortName "CENTRAFRICAINE, RÉPUBLIQUE"@fr , "CENTRAL AFRICAN REPUBLIC"@en ;
	geographis:landArea _:node1chi8o4qax201 .

_:node1chi8o4qax201 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "622984.0" .

<http://telegraphis.net/data/countries/CF#CF> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax202 .

_:node1chi8o4qax202 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "CF" .

<http://telegraphis.net/data/countries/CF#CF> code:hasCode _:node1chi8o4qax203 .

_:node1chi8o4qax203 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "CAF" .

<http://telegraphis.net/data/countries/CF#CF> code:hasCode _:node1chi8o4qax204 .

_:node1chi8o4qax204 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "140" .

<http://telegraphis.net/data/countries/CF#CF> code:hasCode _:node1chi8o4qax205 .

_:node1chi8o4qax205 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "CT" .

<http://telegraphis.net/data/countries/CF#CF> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Central African Republic"@en ;
	gn:population "4434000" ;
	owl:sameAs <http://dbpedia.org/resource/Central_African_Republic> , <http://sws.geonames.org/239880/> , <http://www.geonames.org/countries/#CF> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Central_African_Republic> .

<http://telegraphis.net/data/countries/CG#CG> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/CG/Brazzaville#Brazzaville> ;
	geographis:currency <http://telegraphis.net/data/currencies/XAF#XAF> ;
	geographis:isoAlpha2 "CG" ;
	geographis:isoAlpha3 "COG" ;
	geographis:isoNumeric "178" ;
	geographis:isoShortName "CONGO"@fr , "CONGO"@en ;
	geographis:landArea _:node1chi8o4qax206 .

_:node1chi8o4qax206 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "342000.0" .

<http://telegraphis.net/data/countries/CG#CG> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax207 .

_:node1chi8o4qax207 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "CG" .

<http://telegraphis.net/data/countries/CG#CG> code:hasCode _:node1chi8o4qax208 .

_:node1chi8o4qax208 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "COG" .

<http://telegraphis.net/data/countries/CG#CG> code:hasCode _:node1chi8o4qax209 .

_:node1chi8o4qax209 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "178" .

<http://telegraphis.net/data/countries/CG#CG> code:hasCode _:node1chi8o4qax210 .

_:node1chi8o4qax210 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "CF" .

<http://telegraphis.net/data/countries/CG#CG> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Congo - Brazzaville"@en ;
	gn:population "3039126" ;
	owl:sameAs <http://dbpedia.org/resource/Republic_of_the_Congo> , <http://sws.geonames.org/2260494/> , <http://www.geonames.org/countries/#CG> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Congo_Republic_of_the> .

<http://telegraphis.net/data/countries/CH#CH> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/CH/Berne#Berne> ;
	geographis:currency <http://telegraphis.net/data/currencies/CHE#CHE> , <http://telegraphis.net/data/currencies/CHF#CHF> , <http://telegraphis.net/data/currencies/CHW#CHW> ;
	geographis:isoAlpha2 "CH" ;
	geographis:isoAlpha3 "CHE" ;
	geographis:isoNumeric "756" ;
	geographis:isoShortName "SUISSE"@fr , "SWITZERLAND"@en ;
	geographis:landArea _:node1chi8o4qax211 .

_:node1chi8o4qax211 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "41290.0" .

<http://telegraphis.net/data/countries/CH#CH> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax212 .

_:node1chi8o4qax212 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "CH" .

<http://telegraphis.net/data/countries/CH#CH> code:hasCode _:node1chi8o4qax213 .

_:node1chi8o4qax213 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "CHE" .

<http://telegraphis.net/data/countries/CH#CH> code:hasCode _:node1chi8o4qax214 .

_:node1chi8o4qax214 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "756" .

<http://telegraphis.net/data/countries/CH#CH> code:hasCode _:node1chi8o4qax215 .

_:node1chi8o4qax215 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "SZ" .

<http://telegraphis.net/data/countries/CH#CH> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Switzerland"@en ;
	gn:population "7581000" ;
	owl:sameAs <http://dbpedia.org/resource/Switzerland> , <http://sws.geonames.org/2658434/> , <http://www.geonames.org/countries/#CH> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Switzerland> .

<http://telegraphis.net/data/countries/CI#CI> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/CI/Yamoussoukro#Yamoussoukro> ;
	geographis:currency <http://telegraphis.net/data/currencies/XOF#XOF> ;
	geographis:isoAlpha2 "CI" ;
	geographis:isoAlpha3 "CIV" ;
	geographis:isoNumeric "384" ;
	geographis:isoShortName "CÔTE D'IVOIRE"@fr , "CÔTE D'IVOIRE"@en ;
	geographis:landArea _:node1chi8o4qax216 .

_:node1chi8o4qax216 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "322460.0" .

<http://telegraphis.net/data/countries/CI#CI> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax217 .

_:node1chi8o4qax217 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "CI" .

<http://telegraphis.net/data/countries/CI#CI> code:hasCode _:node1chi8o4qax218 .

_:node1chi8o4qax218 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "CIV" .

<http://telegraphis.net/data/countries/CI#CI> code:hasCode _:node1chi8o4qax219 .

_:node1chi8o4qax219 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "384" .

<http://telegraphis.net/data/countries/CI#CI> code:hasCode _:node1chi8o4qax220 .

_:node1chi8o4qax220 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "IV" .

<http://telegraphis.net/data/countries/CI#CI> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Ivory Coast"@en ;
	gn:population "18373000" ;
	owl:sameAs <http://dbpedia.org/resource/C%C3%B4te_d%27Ivoire> , <http://sws.geonames.org/2287781/> , <http://www.geonames.org/countries/#CI> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Cote_dIvoire> .

<http://telegraphis.net/data/countries/CK#CK> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/CK/Avarua#Avarua> ;
	geographis:currency <http://telegraphis.net/data/currencies/NZD#NZD> ;
	geographis:isoAlpha2 "CK" ;
	geographis:isoAlpha3 "COK" ;
	geographis:isoNumeric "184" ;
	geographis:isoShortName "COOK ISLANDS"@en , "COOK, ÎLES"@fr ;
	geographis:landArea _:node1chi8o4qax221 .

_:node1chi8o4qax221 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "240.0" .

<http://telegraphis.net/data/countries/CK#CK> geographis:onContinent <http://telegraphis.net/data/continents/OC#OC> ;
	code:hasCode _:node1chi8o4qax222 .

_:node1chi8o4qax222 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "CK" .

<http://telegraphis.net/data/countries/CK#CK> code:hasCode _:node1chi8o4qax223 .

_:node1chi8o4qax223 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "COK" .

<http://telegraphis.net/data/countries/CK#CK> code:hasCode _:node1chi8o4qax224 .

_:node1chi8o4qax224 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "184" .

<http://telegraphis.net/data/countries/CK#CK> code:hasCode _:node1chi8o4qax225 .

_:node1chi8o4qax225 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "CW" .

<http://telegraphis.net/data/countries/CK#CK> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Cook Islands"@en ;
	gn:population "21388" ;
	owl:sameAs <http://dbpedia.org/resource/Cook_Islands> , <http://sws.geonames.org/1899402/> , <http://www.geonames.org/countries/#CK> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Cook_Islands> .

<http://telegraphis.net/data/countries/CL#CL> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/CL/Santiago#Santiago> ;
	geographis:currency <http://telegraphis.net/data/currencies/CLF#CLF> , <http://telegraphis.net/data/currencies/CLP#CLP> ;
	geographis:isoAlpha2 "CL" ;
	geographis:isoAlpha3 "CHL" ;
	geographis:isoNumeric "152" ;
	geographis:isoShortName "CHILE"@en , "CHILI"@fr ;
	geographis:landArea _:node1chi8o4qax226 .

_:node1chi8o4qax226 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "756950.0" .

<http://telegraphis.net/data/countries/CL#CL> geographis:onContinent <http://telegraphis.net/data/continents/SA#SA> ;
	code:hasCode _:node1chi8o4qax227 .

_:node1chi8o4qax227 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "CL" .

<http://telegraphis.net/data/countries/CL#CL> code:hasCode _:node1chi8o4qax228 .

_:node1chi8o4qax228 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "CHL" .

<http://telegraphis.net/data/countries/CL#CL> code:hasCode _:node1chi8o4qax229 .

_:node1chi8o4qax229 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "152" .

<http://telegraphis.net/data/countries/CL#CL> code:hasCode _:node1chi8o4qax230 .

_:node1chi8o4qax230 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "CI" .

<http://telegraphis.net/data/countries/CL#CL> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Chile"@en ;
	gn:population "16432000" ;
	owl:sameAs <http://dbpedia.org/resource/Chile> , <http://sws.geonames.org/3895114/> , <http://www.geonames.org/countries/#CL> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Chile> .

<http://telegraphis.net/data/countries/CM#CM> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/CM/Yaound%C3%A9#Yaound%C3%A9> ;
	geographis:currency <http://telegraphis.net/data/currencies/XAF#XAF> ;
	geographis:isoAlpha2 "CM" ;
	geographis:isoAlpha3 "CMR" ;
	geographis:isoNumeric "120" ;
	geographis:isoShortName "CAMEROON"@en , "CAMEROUN"@fr ;
	geographis:landArea _:node1chi8o4qax231 .

_:node1chi8o4qax231 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "475440.0" .

<http://telegraphis.net/data/countries/CM#CM> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax232 .

_:node1chi8o4qax232 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "CM" .

<http://telegraphis.net/data/countries/CM#CM> code:hasCode _:node1chi8o4qax233 .

_:node1chi8o4qax233 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "CMR" .

<http://telegraphis.net/data/countries/CM#CM> code:hasCode _:node1chi8o4qax234 .

_:node1chi8o4qax234 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "120" .

<http://telegraphis.net/data/countries/CM#CM> code:hasCode _:node1chi8o4qax235 .

_:node1chi8o4qax235 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "CM" .

<http://telegraphis.net/data/countries/CM#CM> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Cameroon"@en ;
	gn:population "18467000" ;
	owl:sameAs <http://dbpedia.org/resource/Cameroon> , <http://sws.geonames.org/2233387/> , <http://www.geonames.org/countries/#CM> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Cameroon> .

<http://telegraphis.net/data/countries/CN#CN> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/CN/Beijing#Beijing> ;
	geographis:currency <http://telegraphis.net/data/currencies/CNY#CNY> ;
	geographis:isoAlpha2 "CN" ;
	geographis:isoAlpha3 "CHN" ;
	geographis:isoNumeric "156" ;
	geographis:isoShortName "CHINA"@en , "CHINE"@fr ;
	geographis:landArea _:node1chi8o4qax236 .

_:node1chi8o4qax236 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "9596960.0" .

<http://telegraphis.net/data/countries/CN#CN> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax237 .

_:node1chi8o4qax237 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "CN" .

<http://telegraphis.net/data/countries/CN#CN> code:hasCode _:node1chi8o4qax238 .

_:node1chi8o4qax238 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "CHN" .

<http://telegraphis.net/data/countries/CN#CN> code:hasCode _:node1chi8o4qax239 .

_:node1chi8o4qax239 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "156" .

<http://telegraphis.net/data/countries/CN#CN> code:hasCode _:node1chi8o4qax240 .

_:node1chi8o4qax240 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "CH" .

<http://telegraphis.net/data/countries/CN#CN> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "China"@en ;
	gn:population "1330044000" ;
	owl:sameAs <http://dbpedia.org/resource/People%27s_Republic_of_China> , <http://sws.geonames.org/1814991/> , <http://www.geonames.org/countries/#CN> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/China> .

<http://telegraphis.net/data/countries/CO#CO> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/CO/Bogot%C3%A1#Bogot%C3%A1> ;
	geographis:currency <http://telegraphis.net/data/currencies/COP#COP> , <http://telegraphis.net/data/currencies/COU#COU> ;
	geographis:isoAlpha2 "CO" ;
	geographis:isoAlpha3 "COL" ;
	geographis:isoNumeric "170" ;
	geographis:isoShortName "COLOMBIA"@en , "COLOMBIE"@fr ;
	geographis:landArea _:node1chi8o4qax241 .

_:node1chi8o4qax241 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "1138910.0" .

<http://telegraphis.net/data/countries/CO#CO> geographis:onContinent <http://telegraphis.net/data/continents/SA#SA> ;
	code:hasCode _:node1chi8o4qax242 .

_:node1chi8o4qax242 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "CO" .

<http://telegraphis.net/data/countries/CO#CO> code:hasCode _:node1chi8o4qax243 .

_:node1chi8o4qax243 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "COL" .

<http://telegraphis.net/data/countries/CO#CO> code:hasCode _:node1chi8o4qax244 .

_:node1chi8o4qax244 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "170" .

<http://telegraphis.net/data/countries/CO#CO> code:hasCode _:node1chi8o4qax245 .

_:node1chi8o4qax245 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "CO" .

<http://telegraphis.net/data/countries/CO#CO> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Colombia"@en ;
	gn:population "45013000" ;
	owl:sameAs <http://dbpedia.org/resource/Colombia> , <http://sws.geonames.org/3686110/> , <http://www.geonames.org/countries/#CO> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Colombia> .

<http://telegraphis.net/data/countries/CR#CR> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/CR/San_Jos%C3%A9#SanJos%C3%A9> ;
	geographis:currency <http://telegraphis.net/data/currencies/CRC#CRC> ;
	geographis:isoAlpha2 "CR" ;
	geographis:isoAlpha3 "CRI" ;
	geographis:isoNumeric "188" ;
	geographis:isoShortName "COSTA RICA"@fr , "COSTA RICA"@en ;
	geographis:landArea _:node1chi8o4qax246 .

_:node1chi8o4qax246 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "51100.0" .

<http://telegraphis.net/data/countries/CR#CR> geographis:onContinent <http://telegraphis.net/data/continents/NA#NA> ;
	code:hasCode _:node1chi8o4qax247 .

_:node1chi8o4qax247 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "CR" .

<http://telegraphis.net/data/countries/CR#CR> code:hasCode _:node1chi8o4qax248 .

_:node1chi8o4qax248 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "CRI" .

<http://telegraphis.net/data/countries/CR#CR> code:hasCode _:node1chi8o4qax249 .

_:node1chi8o4qax249 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "188" .

<http://telegraphis.net/data/countries/CR#CR> code:hasCode _:node1chi8o4qax250 .

_:node1chi8o4qax250 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "CS" .

<http://telegraphis.net/data/countries/CR#CR> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Costa Rica"@en ;
	gn:population "4191000" ;
	owl:sameAs <http://dbpedia.org/resource/Costa_Rica> , <http://sws.geonames.org/3624060/> , <http://www.geonames.org/countries/#CR> .

<http://telegraphis.net/data/countries/CU#CU> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/CU/Havana#Havana> ;
	geographis:currency <http://telegraphis.net/data/currencies/CUC#CUC> , <http://telegraphis.net/data/currencies/CUP#CUP> ;
	geographis:isoAlpha2 "CU" ;
	geographis:isoAlpha3 "CUB" ;
	geographis:isoNumeric "192" ;
	geographis:isoShortName "CUBA"@fr , "CUBA"@en ;
	geographis:landArea _:node1chi8o4qax251 .

_:node1chi8o4qax251 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "110860.0" .

<http://telegraphis.net/data/countries/CU#CU> geographis:onContinent <http://telegraphis.net/data/continents/NA#NA> ;
	code:hasCode _:node1chi8o4qax252 .

_:node1chi8o4qax252 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "CU" .

<http://telegraphis.net/data/countries/CU#CU> code:hasCode _:node1chi8o4qax253 .

_:node1chi8o4qax253 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "CUB" .

<http://telegraphis.net/data/countries/CU#CU> code:hasCode _:node1chi8o4qax254 .

_:node1chi8o4qax254 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "192" .

<http://telegraphis.net/data/countries/CU#CU> code:hasCode _:node1chi8o4qax255 .

_:node1chi8o4qax255 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "CU" .

<http://telegraphis.net/data/countries/CU#CU> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Cuba"@en ;
	gn:population "11423000" ;
	owl:sameAs <http://dbpedia.org/resource/Cuba> , <http://sws.geonames.org/3562981/> , <http://www.geonames.org/countries/#CU> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Cuba> .

<http://telegraphis.net/data/countries/CV#CV> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/CV/Praia#Praia> ;
	geographis:currency <http://telegraphis.net/data/currencies/CVE#CVE> ;
	geographis:isoAlpha2 "CV" ;
	geographis:isoAlpha3 "CPV" ;
	geographis:isoNumeric "132" ;
	geographis:isoShortName "CAP-VERT"@fr , "CAPE VERDE"@en ;
	geographis:landArea _:node1chi8o4qax256 .

_:node1chi8o4qax256 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "4033.0" .

<http://telegraphis.net/data/countries/CV#CV> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax257 .

_:node1chi8o4qax257 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "CV" .

<http://telegraphis.net/data/countries/CV#CV> code:hasCode _:node1chi8o4qax258 .

_:node1chi8o4qax258 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "CPV" .

<http://telegraphis.net/data/countries/CV#CV> code:hasCode _:node1chi8o4qax259 .

_:node1chi8o4qax259 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "132" .

<http://telegraphis.net/data/countries/CV#CV> code:hasCode _:node1chi8o4qax260 .

_:node1chi8o4qax260 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "CV" .

<http://telegraphis.net/data/countries/CV#CV> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Cape Verde"@en ;
	gn:population "426000" ;
	owl:sameAs <http://dbpedia.org/resource/Cape_Verde> , <http://sws.geonames.org/3374766/> , <http://www.geonames.org/countries/#CV> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Cape_Verde> .

<http://telegraphis.net/data/countries/CX#CX> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/CX/Flying_Fish_Cove#FlyingFishCove> ;
	geographis:currency <http://telegraphis.net/data/currencies/AUD#AUD> ;
	geographis:isoAlpha2 "CX" ;
	geographis:isoAlpha3 "CXR" ;
	geographis:isoNumeric "162" ;
	geographis:isoShortName "CHRISTMAS ISLAND"@en , "CHRISTMAS, ÎLE"@fr ;
	geographis:landArea _:node1chi8o4qax261 .

_:node1chi8o4qax261 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "135.0" .

<http://telegraphis.net/data/countries/CX#CX> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax262 .

_:node1chi8o4qax262 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "CX" .

<http://telegraphis.net/data/countries/CX#CX> code:hasCode _:node1chi8o4qax263 .

_:node1chi8o4qax263 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "CXR" .

<http://telegraphis.net/data/countries/CX#CX> code:hasCode _:node1chi8o4qax264 .

_:node1chi8o4qax264 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "162" .

<http://telegraphis.net/data/countries/CX#CX> code:hasCode _:node1chi8o4qax265 .

_:node1chi8o4qax265 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "KT" .

<http://telegraphis.net/data/countries/CX#CX> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Christmas Island"@en ;
	gn:population "361" ;
	owl:sameAs <http://dbpedia.org/resource/Christmas_Island> , <http://sws.geonames.org/2078138/> , <http://www.geonames.org/countries/#CX> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Christmas_Island> .

<http://telegraphis.net/data/countries/CY#CY> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/CY/Nicosia#Nicosia> ;
	geographis:currency <http://telegraphis.net/data/currencies/EUR#EUR> ;
	geographis:isoAlpha2 "CY" ;
	geographis:isoAlpha3 "CYP" ;
	geographis:isoNumeric "196" ;
	geographis:isoShortName "CHYPRE"@fr , "CYPRUS"@en ;
	geographis:landArea _:node1chi8o4qax266 .

_:node1chi8o4qax266 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "9250.0" .

<http://telegraphis.net/data/countries/CY#CY> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax267 .

_:node1chi8o4qax267 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "CY" .

<http://telegraphis.net/data/countries/CY#CY> code:hasCode _:node1chi8o4qax268 .

_:node1chi8o4qax268 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "CYP" .

<http://telegraphis.net/data/countries/CY#CY> code:hasCode _:node1chi8o4qax269 .

_:node1chi8o4qax269 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "196" .

<http://telegraphis.net/data/countries/CY#CY> code:hasCode _:node1chi8o4qax270 .

_:node1chi8o4qax270 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "CY" .

<http://telegraphis.net/data/countries/CY#CY> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Cyprus"@en ;
	gn:population "792000" ;
	owl:sameAs <http://dbpedia.org/resource/Cyprus> , <http://sws.geonames.org/146669/> , <http://www.geonames.org/countries/#CY> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Cyprus> .

<http://telegraphis.net/data/countries/CZ#CZ> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/CZ/Prague#Prague> ;
	geographis:currency <http://telegraphis.net/data/currencies/CZK#CZK> ;
	geographis:isoAlpha2 "CZ" ;
	geographis:isoAlpha3 "CZE" ;
	geographis:isoNumeric "203" ;
	geographis:isoShortName "CZECH REPUBLIC"@en , "TCHÈQUE, RÉPUBLIQUE"@fr ;
	geographis:landArea _:node1chi8o4qax271 .

_:node1chi8o4qax271 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "78866.0" .

<http://telegraphis.net/data/countries/CZ#CZ> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax272 .

_:node1chi8o4qax272 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "CZ" .

<http://telegraphis.net/data/countries/CZ#CZ> code:hasCode _:node1chi8o4qax273 .

_:node1chi8o4qax273 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "CZE" .

<http://telegraphis.net/data/countries/CZ#CZ> code:hasCode _:node1chi8o4qax274 .

_:node1chi8o4qax274 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "203" .

<http://telegraphis.net/data/countries/CZ#CZ> code:hasCode _:node1chi8o4qax275 .

_:node1chi8o4qax275 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "EZ" .

<http://telegraphis.net/data/countries/CZ#CZ> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Czech Republic"@en ;
	gn:population "10220000" ;
	owl:sameAs <http://dbpedia.org/resource/Czech_Republic> , <http://sws.geonames.org/3077311/> , <http://www.geonames.org/countries/#CZ> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Czech_Republic> .

<http://telegraphis.net/data/countries/DE#DE> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/DE/Berlin#Berlin> ;
	geographis:currency <http://telegraphis.net/data/currencies/EUR#EUR> ;
	geographis:isoAlpha2 "DE" ;
	geographis:isoAlpha3 "DEU" ;
	geographis:isoNumeric "276" ;
	geographis:isoShortName "ALLEMAGNE"@fr , "GERMANY"@en ;
	geographis:landArea _:node1chi8o4qax276 .

_:node1chi8o4qax276 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "357021.0" .

<http://telegraphis.net/data/countries/DE#DE> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax277 .

_:node1chi8o4qax277 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "DE" .

<http://telegraphis.net/data/countries/DE#DE> code:hasCode _:node1chi8o4qax278 .

_:node1chi8o4qax278 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "DEU" .

<http://telegraphis.net/data/countries/DE#DE> code:hasCode _:node1chi8o4qax279 .

_:node1chi8o4qax279 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "276" .

<http://telegraphis.net/data/countries/DE#DE> code:hasCode _:node1chi8o4qax280 .

_:node1chi8o4qax280 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "GM" .

<http://telegraphis.net/data/countries/DE#DE> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Germany"@en ;
	gn:population "82369000" ;
	owl:sameAs <http://dbpedia.org/resource/Germany> , <http://sws.geonames.org/2921044/> , <http://www.geonames.org/countries/#DE> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Germany> .

<http://telegraphis.net/data/countries/DJ#DJ> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/DJ/Djibouti#Djibouti> ;
	geographis:currency <http://telegraphis.net/data/currencies/DJF#DJF> ;
	geographis:isoAlpha2 "DJ" ;
	geographis:isoAlpha3 "DJI" ;
	geographis:isoNumeric "262" ;
	geographis:isoShortName "DJIBOUTI"@fr , "DJIBOUTI"@en ;
	geographis:landArea _:node1chi8o4qax281 .

_:node1chi8o4qax281 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "23000.0" .

<http://telegraphis.net/data/countries/DJ#DJ> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax282 .

_:node1chi8o4qax282 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "DJ" .

<http://telegraphis.net/data/countries/DJ#DJ> code:hasCode _:node1chi8o4qax283 .

_:node1chi8o4qax283 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "DJI" .

<http://telegraphis.net/data/countries/DJ#DJ> code:hasCode _:node1chi8o4qax284 .

_:node1chi8o4qax284 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "262" .

<http://telegraphis.net/data/countries/DJ#DJ> code:hasCode _:node1chi8o4qax285 .

_:node1chi8o4qax285 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "DJ" .

<http://telegraphis.net/data/countries/DJ#DJ> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Djibouti"@en ;
	gn:population "506000" ;
	owl:sameAs <http://dbpedia.org/resource/Djibouti> , <http://sws.geonames.org/223816/> , <http://www.geonames.org/countries/#DJ> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Djibouti> .

<http://telegraphis.net/data/countries/DK#DK> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/DK/Copenhagen#Copenhagen> ;
	geographis:currency <http://telegraphis.net/data/currencies/DKK#DKK> ;
	geographis:isoAlpha2 "DK" ;
	geographis:isoAlpha3 "DNK" ;
	geographis:isoNumeric "208" ;
	geographis:isoShortName "DANEMARK"@fr , "DENMARK"@en ;
	geographis:landArea _:node1chi8o4qax286 .

_:node1chi8o4qax286 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "43094.0" .

<http://telegraphis.net/data/countries/DK#DK> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax287 .

_:node1chi8o4qax287 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "DK" .

<http://telegraphis.net/data/countries/DK#DK> code:hasCode _:node1chi8o4qax288 .

_:node1chi8o4qax288 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "DNK" .

<http://telegraphis.net/data/countries/DK#DK> code:hasCode _:node1chi8o4qax289 .

_:node1chi8o4qax289 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "208" .

<http://telegraphis.net/data/countries/DK#DK> code:hasCode _:node1chi8o4qax290 .

_:node1chi8o4qax290 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "DA" .

<http://telegraphis.net/data/countries/DK#DK> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Denmark"@en ;
	gn:population "5484000" ;
	owl:sameAs <http://dbpedia.org/resource/Denmark> , <http://sws.geonames.org/2623032/> , <http://www.geonames.org/countries/#DK> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Denmark> .

<http://telegraphis.net/data/countries/DM#DM> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/DM/Roseau#Roseau> ;
	geographis:currency <http://telegraphis.net/data/currencies/XCD#XCD> ;
	geographis:isoAlpha2 "DM" ;
	geographis:isoAlpha3 "DMA" ;
	geographis:isoNumeric "212" ;
	geographis:isoShortName "DOMINICA"@en , "DOMINIQUE"@fr ;
	geographis:landArea _:node1chi8o4qax291 .

_:node1chi8o4qax291 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "754.0" .

<http://telegraphis.net/data/countries/DM#DM> geographis:onContinent <http://telegraphis.net/data/continents/NA#NA> ;
	code:hasCode _:node1chi8o4qax292 .

_:node1chi8o4qax292 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "DM" .

<http://telegraphis.net/data/countries/DM#DM> code:hasCode _:node1chi8o4qax293 .

_:node1chi8o4qax293 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "DMA" .

<http://telegraphis.net/data/countries/DM#DM> code:hasCode _:node1chi8o4qax294 .

_:node1chi8o4qax294 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "212" .

<http://telegraphis.net/data/countries/DM#DM> code:hasCode _:node1chi8o4qax295 .

_:node1chi8o4qax295 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "DO" .

<http://telegraphis.net/data/countries/DM#DM> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Dominica"@en ;
	gn:population "72000" ;
	owl:sameAs <http://dbpedia.org/resource/Dominica> , <http://sws.geonames.org/3575830/> , <http://www.geonames.org/countries/#DM> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Dominica> .

<http://telegraphis.net/data/countries/DO#DO> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/DO/Santo_Domingo#SantoDomingo> ;
	geographis:currency <http://telegraphis.net/data/currencies/DOP#DOP> ;
	geographis:isoAlpha2 "DO" ;
	geographis:isoAlpha3 "DOM" ;
	geographis:isoNumeric "214" ;
	geographis:isoShortName "DOMINICAINE, RÉPUBLIQUE"@fr , "DOMINICAN REPUBLIC"@en ;
	geographis:landArea _:node1chi8o4qax296 .

_:node1chi8o4qax296 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "48730.0" .

<http://telegraphis.net/data/countries/DO#DO> geographis:onContinent <http://telegraphis.net/data/continents/NA#NA> ;
	code:hasCode _:node1chi8o4qax297 .

_:node1chi8o4qax297 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "DO" .

<http://telegraphis.net/data/countries/DO#DO> code:hasCode _:node1chi8o4qax298 .

_:node1chi8o4qax298 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "DOM" .

<http://telegraphis.net/data/countries/DO#DO> code:hasCode _:node1chi8o4qax299 .

_:node1chi8o4qax299 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "214" .

<http://telegraphis.net/data/countries/DO#DO> code:hasCode _:node1chi8o4qax300 .

_:node1chi8o4qax300 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "DR" .

<http://telegraphis.net/data/countries/DO#DO> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Dominican Republic"@en ;
	gn:population "9507000" ;
	owl:sameAs <http://dbpedia.org/resource/Dominican_Republic> , <http://sws.geonames.org/3508796/> , <http://www.geonames.org/countries/#DO> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Dominican_Republic> .

<http://telegraphis.net/data/countries/DZ#DZ> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/DZ/Algiers#Algiers> ;
	geographis:currency <http://telegraphis.net/data/currencies/DZD#DZD> ;
	geographis:isoAlpha2 "DZ" ;
	geographis:isoAlpha3 "DZA" ;
	geographis:isoNumeric "012" ;
	geographis:isoShortName "ALGERIA"@en , "ALGÉRIE"@fr ;
	geographis:landArea _:node1chi8o4qax301 .

_:node1chi8o4qax301 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "2381740.0" .

<http://telegraphis.net/data/countries/DZ#DZ> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax302 .

_:node1chi8o4qax302 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "DZ" .

<http://telegraphis.net/data/countries/DZ#DZ> code:hasCode _:node1chi8o4qax303 .

_:node1chi8o4qax303 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "DZA" .

<http://telegraphis.net/data/countries/DZ#DZ> code:hasCode _:node1chi8o4qax304 .

_:node1chi8o4qax304 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "012" .

<http://telegraphis.net/data/countries/DZ#DZ> code:hasCode _:node1chi8o4qax305 .

_:node1chi8o4qax305 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "AG" .

<http://telegraphis.net/data/countries/DZ#DZ> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Algeria"@en ;
	gn:population "33739000" ;
	owl:sameAs <http://dbpedia.org/resource/Algeria> , <http://sws.geonames.org/2589581/> , <http://www.geonames.org/countries/#DZ> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Algeria> .

<http://telegraphis.net/data/countries/EC#EC> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/EC/Quito#Quito> ;
	geographis:currency <http://telegraphis.net/data/currencies/USD#USD> ;
	geographis:isoAlpha2 "EC" ;
	geographis:isoAlpha3 "ECU" ;
	geographis:isoNumeric "218" ;
	geographis:isoShortName "ECUADOR"@en , "ÉQUATEUR"@fr ;
	geographis:landArea _:node1chi8o4qax306 .

_:node1chi8o4qax306 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "283560.0" .

<http://telegraphis.net/data/countries/EC#EC> geographis:onContinent <http://telegraphis.net/data/continents/SA#SA> ;
	code:hasCode _:node1chi8o4qax307 .

_:node1chi8o4qax307 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "EC" .

<http://telegraphis.net/data/countries/EC#EC> code:hasCode _:node1chi8o4qax308 .

_:node1chi8o4qax308 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "ECU" .

<http://telegraphis.net/data/countries/EC#EC> code:hasCode _:node1chi8o4qax309 .

_:node1chi8o4qax309 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "218" .

<http://telegraphis.net/data/countries/EC#EC> code:hasCode _:node1chi8o4qax310 .

_:node1chi8o4qax310 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "EC" .

<http://telegraphis.net/data/countries/EC#EC> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Ecuador"@en ;
	gn:population "13927000" ;
	owl:sameAs <http://dbpedia.org/resource/Ecuador> , <http://sws.geonames.org/3658394/> , <http://www.geonames.org/countries/#EC> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Ecuador> .

<http://telegraphis.net/data/countries/EE#EE> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/EE/Tallinn#Tallinn> ;
	geographis:currency <http://telegraphis.net/data/currencies/EEK#EEK> ;
	geographis:isoAlpha2 "EE" ;
	geographis:isoAlpha3 "EST" ;
	geographis:isoNumeric "233" ;
	geographis:isoShortName "ESTONIA"@en , "ESTONIE"@fr ;
	geographis:landArea _:node1chi8o4qax311 .

_:node1chi8o4qax311 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "45226.0" .

<http://telegraphis.net/data/countries/EE#EE> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax312 .

_:node1chi8o4qax312 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "EE" .

<http://telegraphis.net/data/countries/EE#EE> code:hasCode _:node1chi8o4qax313 .

_:node1chi8o4qax313 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "EST" .

<http://telegraphis.net/data/countries/EE#EE> code:hasCode _:node1chi8o4qax314 .

_:node1chi8o4qax314 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "233" .

<http://telegraphis.net/data/countries/EE#EE> code:hasCode _:node1chi8o4qax315 .

_:node1chi8o4qax315 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "EN" .

<http://telegraphis.net/data/countries/EE#EE> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Estonia"@en ;
	gn:population "1307000" ;
	owl:sameAs <http://dbpedia.org/resource/Estonia> , <http://sws.geonames.org/453733/> , <http://www.geonames.org/countries/#EE> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Estonia> .

<http://telegraphis.net/data/countries/EG#EG> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/EG/Cairo#Cairo> ;
	geographis:currency <http://telegraphis.net/data/currencies/EGP#EGP> ;
	geographis:isoAlpha2 "EG" ;
	geographis:isoAlpha3 "EGY" ;
	geographis:isoNumeric "818" ;
	geographis:isoShortName "EGYPT"@en , "ÉGYPTE"@fr ;
	geographis:landArea _:node1chi8o4qax316 .

_:node1chi8o4qax316 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "1001450.0" .

<http://telegraphis.net/data/countries/EG#EG> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax317 .

_:node1chi8o4qax317 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "EG" .

<http://telegraphis.net/data/countries/EG#EG> code:hasCode _:node1chi8o4qax318 .

_:node1chi8o4qax318 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "EGY" .

<http://telegraphis.net/data/countries/EG#EG> code:hasCode _:node1chi8o4qax319 .

_:node1chi8o4qax319 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "818" .

<http://telegraphis.net/data/countries/EG#EG> code:hasCode _:node1chi8o4qax320 .

_:node1chi8o4qax320 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "EG" .

<http://telegraphis.net/data/countries/EG#EG> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Egypt"@en ;
	gn:population "81713000" ;
	owl:sameAs <http://dbpedia.org/resource/Egypt> , <http://sws.geonames.org/357994/> , <http://www.geonames.org/countries/#EG> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Egypt> .

<http://telegraphis.net/data/countries/EH#EH> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/EH/El-Aaiun#ElAaiun> ;
	geographis:currency <http://telegraphis.net/data/currencies/MAD#MAD> ;
	geographis:isoAlpha2 "EH" ;
	geographis:isoAlpha3 "ESH" ;
	geographis:isoNumeric "732" ;
	geographis:isoShortName "SAHARA OCCIDENTAL"@fr , "WESTERN SAHARA"@en ;
	geographis:landArea _:node1chi8o4qax321 .

_:node1chi8o4qax321 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "266000.0" .

<http://telegraphis.net/data/countries/EH#EH> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax322 .

_:node1chi8o4qax322 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "EH" .

<http://telegraphis.net/data/countries/EH#EH> code:hasCode _:node1chi8o4qax323 .

_:node1chi8o4qax323 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "ESH" .

<http://telegraphis.net/data/countries/EH#EH> code:hasCode _:node1chi8o4qax324 .

_:node1chi8o4qax324 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "732" .

<http://telegraphis.net/data/countries/EH#EH> code:hasCode _:node1chi8o4qax325 .

_:node1chi8o4qax325 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "WI" .

<http://telegraphis.net/data/countries/EH#EH> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Western Sahara"@en ;
	gn:population "273008" ;
	owl:sameAs <http://dbpedia.org/resource/Western_Sahara> , <http://sws.geonames.org/2461445/> , <http://www.geonames.org/countries/#EH> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Western_Sahara> .

<http://telegraphis.net/data/countries/ER#ER> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/ER/Asmara#Asmara> ;
	geographis:currency <http://telegraphis.net/data/currencies/ERN#ERN> ;
	geographis:isoAlpha2 "ER" ;
	geographis:isoAlpha3 "ERI" ;
	geographis:isoNumeric "232" ;
	geographis:isoShortName "ERITREA"@en , "ÉRYTHRÉE"@fr ;
	geographis:landArea _:node1chi8o4qax326 .

_:node1chi8o4qax326 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "121320.0" .

<http://telegraphis.net/data/countries/ER#ER> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax327 .

_:node1chi8o4qax327 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "ER" .

<http://telegraphis.net/data/countries/ER#ER> code:hasCode _:node1chi8o4qax328 .

_:node1chi8o4qax328 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "ERI" .

<http://telegraphis.net/data/countries/ER#ER> code:hasCode _:node1chi8o4qax329 .

_:node1chi8o4qax329 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "232" .

<http://telegraphis.net/data/countries/ER#ER> code:hasCode _:node1chi8o4qax330 .

_:node1chi8o4qax330 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "ER" .

<http://telegraphis.net/data/countries/ER#ER> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Eritrea"@en ;
	gn:population "5028000" ;
	owl:sameAs <http://dbpedia.org/resource/Eritrea> , <http://sws.geonames.org/338010/> , <http://www.geonames.org/countries/#ER> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Eritrea> .

<http://telegraphis.net/data/countries/ES#ES> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/ES/Madrid#Madrid> ;
	geographis:currency <http://telegraphis.net/data/currencies/EUR#EUR> ;
	geographis:isoAlpha2 "ES" ;
	geographis:isoAlpha3 "ESP" ;
	geographis:isoNumeric "724" ;
	geographis:isoShortName "ESPAGNE"@fr , "SPAIN"@en ;
	geographis:landArea _:node1chi8o4qax331 .

_:node1chi8o4qax331 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "504782.0" .

<http://telegraphis.net/data/countries/ES#ES> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax332 .

_:node1chi8o4qax332 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "ES" .

<http://telegraphis.net/data/countries/ES#ES> code:hasCode _:node1chi8o4qax333 .

_:node1chi8o4qax333 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "ESP" .

<http://telegraphis.net/data/countries/ES#ES> code:hasCode _:node1chi8o4qax334 .

_:node1chi8o4qax334 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "724" .

<http://telegraphis.net/data/countries/ES#ES> code:hasCode _:node1chi8o4qax335 .

_:node1chi8o4qax335 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "SP" .

<http://telegraphis.net/data/countries/ES#ES> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Spain"@en ;
	gn:population "40491000" ;
	owl:sameAs <http://dbpedia.org/resource/Spain> , <http://sws.geonames.org/2510769/> , <http://www.geonames.org/countries/#ES> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Spain> .

<http://telegraphis.net/data/countries/ET#ET> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/ET/Addis_Ababa#AddisAbaba> ;
	geographis:currency <http://telegraphis.net/data/currencies/ETB#ETB> ;
	geographis:isoAlpha2 "ET" ;
	geographis:isoAlpha3 "ETH" ;
	geographis:isoNumeric "231" ;
	geographis:isoShortName "ETHIOPIA"@en , "ÉTHIOPIE"@fr ;
	geographis:landArea _:node1chi8o4qax336 .

_:node1chi8o4qax336 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "1127127.0" .

<http://telegraphis.net/data/countries/ET#ET> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax337 .

_:node1chi8o4qax337 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "ET" .

<http://telegraphis.net/data/countries/ET#ET> code:hasCode _:node1chi8o4qax338 .

_:node1chi8o4qax338 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "ETH" .

<http://telegraphis.net/data/countries/ET#ET> code:hasCode _:node1chi8o4qax339 .

_:node1chi8o4qax339 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "231" .

<http://telegraphis.net/data/countries/ET#ET> code:hasCode _:node1chi8o4qax340 .

_:node1chi8o4qax340 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "ET" .

<http://telegraphis.net/data/countries/ET#ET> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Ethiopia"@en ;
	gn:population "78254000" ;
	owl:sameAs <http://dbpedia.org/resource/Ethiopia> , <http://sws.geonames.org/337996/> , <http://www.geonames.org/countries/#ET> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Ethiopia> .

<http://telegraphis.net/data/countries/FI#FI> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/FI/Helsinki#Helsinki> ;
	geographis:currency <http://telegraphis.net/data/currencies/EUR#EUR> ;
	geographis:isoAlpha2 "FI" ;
	geographis:isoAlpha3 "FIN" ;
	geographis:isoNumeric "246" ;
	geographis:isoShortName "FINLAND"@en , "FINLANDE"@fr ;
	geographis:landArea _:node1chi8o4qax341 .

_:node1chi8o4qax341 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "337030.0" .

<http://telegraphis.net/data/countries/FI#FI> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax342 .

_:node1chi8o4qax342 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "FI" .

<http://telegraphis.net/data/countries/FI#FI> code:hasCode _:node1chi8o4qax343 .

_:node1chi8o4qax343 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "FIN" .

<http://telegraphis.net/data/countries/FI#FI> code:hasCode _:node1chi8o4qax344 .

_:node1chi8o4qax344 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "246" .

<http://telegraphis.net/data/countries/FI#FI> code:hasCode _:node1chi8o4qax345 .

_:node1chi8o4qax345 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "FI" .

<http://telegraphis.net/data/countries/FI#FI> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Finland"@en ;
	gn:population "5244000" ;
	owl:sameAs <http://dbpedia.org/resource/Finland> , <http://sws.geonames.org/660013/> , <http://www.geonames.org/countries/#FI> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Finland> .

<http://telegraphis.net/data/countries/FJ#FJ> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/FJ/Suva#Suva> ;
	geographis:currency <http://telegraphis.net/data/currencies/FJD#FJD> ;
	geographis:isoAlpha2 "FJ" ;
	geographis:isoAlpha3 "FJI" ;
	geographis:isoNumeric "242" ;
	geographis:isoShortName "FIDJI"@fr , "FIJI"@en ;
	geographis:landArea _:node1chi8o4qax346 .

_:node1chi8o4qax346 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "18270.0" .

<http://telegraphis.net/data/countries/FJ#FJ> geographis:onContinent <http://telegraphis.net/data/continents/OC#OC> ;
	code:hasCode _:node1chi8o4qax347 .

_:node1chi8o4qax347 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "FJ" .

<http://telegraphis.net/data/countries/FJ#FJ> code:hasCode _:node1chi8o4qax348 .

_:node1chi8o4qax348 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "FJI" .

<http://telegraphis.net/data/countries/FJ#FJ> code:hasCode _:node1chi8o4qax349 .

_:node1chi8o4qax349 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "242" .

<http://telegraphis.net/data/countries/FJ#FJ> code:hasCode _:node1chi8o4qax350 .

_:node1chi8o4qax350 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "FJ" .

<http://telegraphis.net/data/countries/FJ#FJ> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Fiji"@en ;
	gn:population "931000" ;
	owl:sameAs <http://dbpedia.org/resource/Fiji> , <http://sws.geonames.org/2205218/> , <http://www.geonames.org/countries/#FJ> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Fiji> .

<http://telegraphis.net/data/countries/FK#FK> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/FK/Stanley#Stanley> ;
	geographis:currency <http://telegraphis.net/data/currencies/FKP#FKP> ;
	geographis:isoAlpha2 "FK" ;
	geographis:isoAlpha3 "FLK" ;
	geographis:isoNumeric "238" ;
	geographis:isoShortName "FALKLAND ISLANDS (MALVINAS)"@en , "FALKLAND, ÎLES (MALVINAS)"@fr ;
	geographis:landArea _:node1chi8o4qax351 .

_:node1chi8o4qax351 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "12173.0" .

<http://telegraphis.net/data/countries/FK#FK> geographis:onContinent <http://telegraphis.net/data/continents/SA#SA> ;
	code:hasCode _:node1chi8o4qax352 .

_:node1chi8o4qax352 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "FK" .

<http://telegraphis.net/data/countries/FK#FK> code:hasCode _:node1chi8o4qax353 .

_:node1chi8o4qax353 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "FLK" .

<http://telegraphis.net/data/countries/FK#FK> code:hasCode _:node1chi8o4qax354 .

_:node1chi8o4qax354 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "238" .

<http://telegraphis.net/data/countries/FK#FK> code:hasCode _:node1chi8o4qax355 .

_:node1chi8o4qax355 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "FK" .

<http://telegraphis.net/data/countries/FK#FK> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Falkland Islands"@en ;
	gn:population "2638" ;
	owl:sameAs <http://dbpedia.org/resource/Falkland_Islands> , <http://sws.geonames.org/3474414/> , <http://www.geonames.org/countries/#FK> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Falkland_Islands_(Islas_Malvinas)> .

<http://telegraphis.net/data/countries/FM#FM> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/FM/Palikir#Palikir> ;
	geographis:currency <http://telegraphis.net/data/currencies/USD#USD> ;
	geographis:isoAlpha2 "FM" ;
	geographis:isoAlpha3 "FSM" ;
	geographis:isoNumeric "583" ;
	geographis:isoShortName "MICRONESIA, FEDERATED STATES OF"@en , "MICRONÉSIE, ÉTATS FÉDÉRÉS DE"@fr ;
	geographis:landArea _:node1chi8o4qax356 .

_:node1chi8o4qax356 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "702.0" .

<http://telegraphis.net/data/countries/FM#FM> geographis:onContinent <http://telegraphis.net/data/continents/OC#OC> ;
	code:hasCode _:node1chi8o4qax357 .

_:node1chi8o4qax357 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "FM" .

<http://telegraphis.net/data/countries/FM#FM> code:hasCode _:node1chi8o4qax358 .

_:node1chi8o4qax358 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "FSM" .

<http://telegraphis.net/data/countries/FM#FM> code:hasCode _:node1chi8o4qax359 .

_:node1chi8o4qax359 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "583" .

<http://telegraphis.net/data/countries/FM#FM> code:hasCode _:node1chi8o4qax360 .

_:node1chi8o4qax360 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "FM" .

<http://telegraphis.net/data/countries/FM#FM> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Micronesia"@en ;
	gn:population "108105" ;
	owl:sameAs <http://dbpedia.org/resource/Federated_States_of_Micronesia> , <http://sws.geonames.org/2081918/> , <http://www.geonames.org/countries/#FM> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Micronesia_Federated_States_of> .

<http://telegraphis.net/data/countries/FO#FO> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/FO/T%C3%B3rshavn#T%C3%B3rshavn> ;
	geographis:currency <http://telegraphis.net/data/currencies/DKK#DKK> ;
	geographis:isoAlpha2 "FO" ;
	geographis:isoAlpha3 "FRO" ;
	geographis:isoNumeric "234" ;
	geographis:isoShortName "FAROE ISLANDS"@en , "FÉROÉ, ÎLES"@fr ;
	geographis:landArea _:node1chi8o4qax361 .

_:node1chi8o4qax361 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "1399.0" .

<http://telegraphis.net/data/countries/FO#FO> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax362 .

_:node1chi8o4qax362 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "FO" .

<http://telegraphis.net/data/countries/FO#FO> code:hasCode _:node1chi8o4qax363 .

_:node1chi8o4qax363 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "FRO" .

<http://telegraphis.net/data/countries/FO#FO> code:hasCode _:node1chi8o4qax364 .

_:node1chi8o4qax364 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "234" .

<http://telegraphis.net/data/countries/FO#FO> code:hasCode _:node1chi8o4qax365 .

_:node1chi8o4qax365 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "FO" .

<http://telegraphis.net/data/countries/FO#FO> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Faroe Islands"@en ;
	gn:population "48228" ;
	owl:sameAs <http://dbpedia.org/resource/Faroe_Islands> , <http://sws.geonames.org/2622320/> , <http://www.geonames.org/countries/#FO> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Faroe_Islands> .

<http://telegraphis.net/data/countries/FR#FR> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/FR/Paris#Paris> ;
	geographis:currency <http://telegraphis.net/data/currencies/EUR#EUR> ;
	geographis:isoAlpha2 "FR" ;
	geographis:isoAlpha3 "FRA" ;
	geographis:isoNumeric "250" ;
	geographis:isoShortName "FRANCE"@fr , "FRANCE"@en ;
	geographis:landArea _:node1chi8o4qax366 .

_:node1chi8o4qax366 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "547030.0" .

<http://telegraphis.net/data/countries/FR#FR> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax367 .

_:node1chi8o4qax367 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "FR" .

<http://telegraphis.net/data/countries/FR#FR> code:hasCode _:node1chi8o4qax368 .

_:node1chi8o4qax368 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "FRA" .

<http://telegraphis.net/data/countries/FR#FR> code:hasCode _:node1chi8o4qax369 .

_:node1chi8o4qax369 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "250" .

<http://telegraphis.net/data/countries/FR#FR> code:hasCode _:node1chi8o4qax370 .

_:node1chi8o4qax370 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "FR" .

<http://telegraphis.net/data/countries/FR#FR> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "France"@en ;
	gn:population "64094000" ;
	owl:sameAs <http://dbpedia.org/resource/France> , <http://sws.geonames.org/3017382/> , <http://www.geonames.org/countries/#FR> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/France> .

<http://telegraphis.net/data/countries/GA#GA> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/GA/Libreville#Libreville> ;
	geographis:currency <http://telegraphis.net/data/currencies/XAF#XAF> ;
	geographis:isoAlpha2 "GA" ;
	geographis:isoAlpha3 "GAB" ;
	geographis:isoNumeric "266" ;
	geographis:isoShortName "GABON"@fr , "GABON"@en ;
	geographis:landArea _:node1chi8o4qax371 .

_:node1chi8o4qax371 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "267667.0" .

<http://telegraphis.net/data/countries/GA#GA> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax372 .

_:node1chi8o4qax372 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "GA" .

<http://telegraphis.net/data/countries/GA#GA> code:hasCode _:node1chi8o4qax373 .

_:node1chi8o4qax373 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "GAB" .

<http://telegraphis.net/data/countries/GA#GA> code:hasCode _:node1chi8o4qax374 .

_:node1chi8o4qax374 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "266" .

<http://telegraphis.net/data/countries/GA#GA> code:hasCode _:node1chi8o4qax375 .

_:node1chi8o4qax375 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "GB" .

<http://telegraphis.net/data/countries/GA#GA> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Gabon"@en ;
	gn:population "1484000" ;
	owl:sameAs <http://dbpedia.org/resource/Gabon> , <http://sws.geonames.org/2400553/> , <http://www.geonames.org/countries/#GA> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Gabon> .

<http://telegraphis.net/data/countries/GB#GB> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/GB/London#London> ;
	geographis:currency <http://telegraphis.net/data/currencies/GBP#GBP> ;
	geographis:isoAlpha2 "GB" ;
	geographis:isoAlpha3 "GBR" ;
	geographis:isoNumeric "826" ;
	geographis:isoShortName "ROYAUME-UNI"@fr , "UNITED KINGDOM"@en ;
	geographis:landArea _:node1chi8o4qax376 .

_:node1chi8o4qax376 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "244820.0" .

<http://telegraphis.net/data/countries/GB#GB> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax377 .

_:node1chi8o4qax377 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "GB" .

<http://telegraphis.net/data/countries/GB#GB> code:hasCode _:node1chi8o4qax378 .

_:node1chi8o4qax378 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "GBR" .

<http://telegraphis.net/data/countries/GB#GB> code:hasCode _:node1chi8o4qax379 .

_:node1chi8o4qax379 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "826" .

<http://telegraphis.net/data/countries/GB#GB> code:hasCode _:node1chi8o4qax380 .

_:node1chi8o4qax380 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "UK" .

<http://telegraphis.net/data/countries/GB#GB> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "United Kingdom"@en ;
	gn:population "60943000" ;
	owl:sameAs <http://dbpedia.org/resource/United_Kingdom> , <http://sws.geonames.org/2635167/> , <http://www.geonames.org/countries/#GB> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/United_Kingdom> .

<http://telegraphis.net/data/countries/GD#GD> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/GD/St._George%27s#St.George%27s> ;
	geographis:currency <http://telegraphis.net/data/currencies/XCD#XCD> ;
	geographis:isoAlpha2 "GD" ;
	geographis:isoAlpha3 "GRD" ;
	geographis:isoNumeric "308" ;
	geographis:isoShortName "GRENADA"@en , "GRENADE"@fr ;
	geographis:landArea _:node1chi8o4qax381 .

_:node1chi8o4qax381 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "344.0" .

<http://telegraphis.net/data/countries/GD#GD> geographis:onContinent <http://telegraphis.net/data/continents/NA#NA> ;
	code:hasCode _:node1chi8o4qax382 .

_:node1chi8o4qax382 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "GD" .

<http://telegraphis.net/data/countries/GD#GD> code:hasCode _:node1chi8o4qax383 .

_:node1chi8o4qax383 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "GRD" .

<http://telegraphis.net/data/countries/GD#GD> code:hasCode _:node1chi8o4qax384 .

_:node1chi8o4qax384 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "308" .

<http://telegraphis.net/data/countries/GD#GD> code:hasCode _:node1chi8o4qax385 .

_:node1chi8o4qax385 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "GJ" .

<http://telegraphis.net/data/countries/GD#GD> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Grenada"@en ;
	gn:population "90000" ;
	owl:sameAs <http://dbpedia.org/resource/Grenada> , <http://sws.geonames.org/3580239/> , <http://www.geonames.org/countries/#GD> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Grenada> .

<http://telegraphis.net/data/countries/GE#GE> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/GE/Tbilisi#Tbilisi> ;
	geographis:currency <http://telegraphis.net/data/currencies/GEL#GEL> ;
	geographis:isoAlpha2 "GE" ;
	geographis:isoAlpha3 "GEO" ;
	geographis:isoNumeric "268" ;
	geographis:isoShortName "GEORGIA"@en , "GÉORGIE"@fr ;
	geographis:landArea _:node1chi8o4qax386 .

_:node1chi8o4qax386 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "69700.0" .

<http://telegraphis.net/data/countries/GE#GE> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax387 .

_:node1chi8o4qax387 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "GE" .

<http://telegraphis.net/data/countries/GE#GE> code:hasCode _:node1chi8o4qax388 .

_:node1chi8o4qax388 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "GEO" .

<http://telegraphis.net/data/countries/GE#GE> code:hasCode _:node1chi8o4qax389 .

_:node1chi8o4qax389 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "268" .

<http://telegraphis.net/data/countries/GE#GE> code:hasCode _:node1chi8o4qax390 .

_:node1chi8o4qax390 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "GG" .

<http://telegraphis.net/data/countries/GE#GE> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Georgia"@en ;
	gn:population "4630000" ;
	owl:sameAs <http://dbpedia.org/resource/Georgia_%28country%29> , <http://sws.geonames.org/614540/> , <http://www.geonames.org/countries/#GE> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Georgia> .

<http://telegraphis.net/data/countries/GF#GF> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/GF/Cayenne#Cayenne> ;
	geographis:isoAlpha2 "GF" ;
	geographis:isoAlpha3 "GUF" ;
	geographis:isoNumeric "254" ;
	geographis:isoShortName "FRENCH GUIANA"@en , "GUYANE FRANÇAISE"@fr ;
	geographis:landArea _:node1chi8o4qax391 .

_:node1chi8o4qax391 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "91000.0" .

<http://telegraphis.net/data/countries/GF#GF> geographis:onContinent <http://telegraphis.net/data/continents/SA#SA> ;
	code:hasCode _:node1chi8o4qax392 .

_:node1chi8o4qax392 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "GF" .

<http://telegraphis.net/data/countries/GF#GF> code:hasCode _:node1chi8o4qax393 .

_:node1chi8o4qax393 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "GUF" .

<http://telegraphis.net/data/countries/GF#GF> code:hasCode _:node1chi8o4qax394 .

_:node1chi8o4qax394 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "254" .

<http://telegraphis.net/data/countries/GF#GF> code:hasCode _:node1chi8o4qax395 .

_:node1chi8o4qax395 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "FG" .

<http://telegraphis.net/data/countries/GF#GF> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "French Guiana"@en ;
	gn:population "195506" ;
	owl:sameAs <http://dbpedia.org/resource/French_Guiana> , <http://sws.geonames.org/3381670/> , <http://www.geonames.org/countries/#GF> .

<http://telegraphis.net/data/countries/GG#GG> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/GG/St_Peter_Port#StPeterPort> ;
	geographis:currency <http://telegraphis.net/data/currencies/GBP#GBP> ;
	geographis:isoAlpha2 "GG" ;
	geographis:isoAlpha3 "GGY" ;
	geographis:isoNumeric "831" ;
	geographis:isoShortName "GUERNESEY"@fr , "GUERNSEY"@en ;
	geographis:landArea _:node1chi8o4qax396 .

_:node1chi8o4qax396 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "78.0" .

<http://telegraphis.net/data/countries/GG#GG> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax397 .

_:node1chi8o4qax397 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "GG" .

<http://telegraphis.net/data/countries/GG#GG> code:hasCode _:node1chi8o4qax398 .

_:node1chi8o4qax398 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "GGY" .

<http://telegraphis.net/data/countries/GG#GG> code:hasCode _:node1chi8o4qax399 .

_:node1chi8o4qax399 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "831" .

<http://telegraphis.net/data/countries/GG#GG> code:hasCode _:node1chi8o4qax400 .

_:node1chi8o4qax400 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "GK" .

<http://telegraphis.net/data/countries/GG#GG> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Guernsey"@en ;
	gn:population "65228" ;
	owl:sameAs <http://dbpedia.org/resource/Guernsey> , <http://sws.geonames.org/3042362/> , <http://www.geonames.org/countries/#GG> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Guernsey> .

<http://telegraphis.net/data/countries/GH#GH> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/GH/Accra#Accra> ;
	geographis:currency <http://telegraphis.net/data/currencies/GHS#GHS> ;
	geographis:isoAlpha2 "GH" ;
	geographis:isoAlpha3 "GHA" ;
	geographis:isoNumeric "288" ;
	geographis:isoShortName "GHANA"@fr , "GHANA"@en ;
	geographis:landArea _:node1chi8o4qax401 .

_:node1chi8o4qax401 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "239460.0" .

<http://telegraphis.net/data/countries/GH#GH> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax402 .

_:node1chi8o4qax402 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "GH" .

<http://telegraphis.net/data/countries/GH#GH> code:hasCode _:node1chi8o4qax403 .

_:node1chi8o4qax403 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "GHA" .

<http://telegraphis.net/data/countries/GH#GH> code:hasCode _:node1chi8o4qax404 .

_:node1chi8o4qax404 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "288" .

<http://telegraphis.net/data/countries/GH#GH> code:hasCode _:node1chi8o4qax405 .

_:node1chi8o4qax405 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "GH" .

<http://telegraphis.net/data/countries/GH#GH> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Ghana"@en ;
	gn:population "23382000" ;
	owl:sameAs <http://dbpedia.org/resource/Ghana> , <http://sws.geonames.org/2300660/> , <http://www.geonames.org/countries/#GH> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Ghana> .

<http://telegraphis.net/data/countries/GI#GI> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/GI/Gibraltar#Gibraltar> ;
	geographis:currency <http://telegraphis.net/data/currencies/GIP#GIP> ;
	geographis:isoAlpha2 "GI" ;
	geographis:isoAlpha3 "GIB" ;
	geographis:isoNumeric "292" ;
	geographis:isoShortName "GIBRALTAR"@fr , "GIBRALTAR"@en ;
	geographis:landArea _:node1chi8o4qax406 .

_:node1chi8o4qax406 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "6.5" .

<http://telegraphis.net/data/countries/GI#GI> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax407 .

_:node1chi8o4qax407 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "GI" .

<http://telegraphis.net/data/countries/GI#GI> code:hasCode _:node1chi8o4qax408 .

_:node1chi8o4qax408 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "GIB" .

<http://telegraphis.net/data/countries/GI#GI> code:hasCode _:node1chi8o4qax409 .

_:node1chi8o4qax409 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "292" .

<http://telegraphis.net/data/countries/GI#GI> code:hasCode _:node1chi8o4qax410 .

_:node1chi8o4qax410 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "GI" .

<http://telegraphis.net/data/countries/GI#GI> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Gibraltar"@en ;
	gn:population "27884" ;
	owl:sameAs <http://dbpedia.org/resource/Gibraltar> , <http://sws.geonames.org/2411586/> , <http://www.geonames.org/countries/#GI> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Gibraltar> .

<http://telegraphis.net/data/countries/GL#GL> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/GL/Nuuk#Nuuk> ;
	geographis:currency <http://telegraphis.net/data/currencies/DKK#DKK> ;
	geographis:isoAlpha2 "GL" ;
	geographis:isoAlpha3 "GRL" ;
	geographis:isoNumeric "304" ;
	geographis:isoShortName "GREENLAND"@en , "GROENLAND"@fr ;
	geographis:landArea _:node1chi8o4qax411 .

_:node1chi8o4qax411 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "2166086.0" .

<http://telegraphis.net/data/countries/GL#GL> geographis:onContinent <http://telegraphis.net/data/continents/NA#NA> ;
	code:hasCode _:node1chi8o4qax412 .

_:node1chi8o4qax412 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "GL" .

<http://telegraphis.net/data/countries/GL#GL> code:hasCode _:node1chi8o4qax413 .

_:node1chi8o4qax413 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "GRL" .

<http://telegraphis.net/data/countries/GL#GL> code:hasCode _:node1chi8o4qax414 .

_:node1chi8o4qax414 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "304" .

<http://telegraphis.net/data/countries/GL#GL> code:hasCode _:node1chi8o4qax415 .

_:node1chi8o4qax415 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "GL" .

<http://telegraphis.net/data/countries/GL#GL> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Greenland"@en ;
	gn:population "56375" ;
	owl:sameAs <http://dbpedia.org/resource/Greenland> , <http://sws.geonames.org/3425505/> , <http://www.geonames.org/countries/#GL> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Greenland> .

<http://telegraphis.net/data/countries/GM#GM> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/GM/Banjul#Banjul> ;
	geographis:currency <http://telegraphis.net/data/currencies/GMD#GMD> ;
	geographis:isoAlpha2 "GM" ;
	geographis:isoAlpha3 "GMB" ;
	geographis:isoNumeric "270" ;
	geographis:isoShortName "GAMBIA"@en , "GAMBIE"@fr ;
	geographis:landArea _:node1chi8o4qax416 .

_:node1chi8o4qax416 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "11300.0" .

<http://telegraphis.net/data/countries/GM#GM> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax417 .

_:node1chi8o4qax417 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "GM" .

<http://telegraphis.net/data/countries/GM#GM> code:hasCode _:node1chi8o4qax418 .

_:node1chi8o4qax418 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "GMB" .

<http://telegraphis.net/data/countries/GM#GM> code:hasCode _:node1chi8o4qax419 .

_:node1chi8o4qax419 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "270" .

<http://telegraphis.net/data/countries/GM#GM> code:hasCode _:node1chi8o4qax420 .

_:node1chi8o4qax420 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "GA" .

<http://telegraphis.net/data/countries/GM#GM> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Gambia"@en ;
	gn:population "1593256" ;
	owl:sameAs <http://dbpedia.org/resource/The_Gambia> , <http://sws.geonames.org/2413451/> , <http://www.geonames.org/countries/#GM> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Gambia_The> .

<http://telegraphis.net/data/countries/GN#GN> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/GN/Conakry#Conakry> ;
	geographis:currency <http://telegraphis.net/data/currencies/GNF#GNF> ;
	geographis:isoAlpha2 "GN" ;
	geographis:isoAlpha3 "GIN" ;
	geographis:isoNumeric "324" ;
	geographis:isoShortName "GUINEA"@en , "GUINÉE"@fr ;
	geographis:landArea _:node1chi8o4qax421 .

_:node1chi8o4qax421 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "245857.0" .

<http://telegraphis.net/data/countries/GN#GN> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax422 .

_:node1chi8o4qax422 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "GN" .

<http://telegraphis.net/data/countries/GN#GN> code:hasCode _:node1chi8o4qax423 .

_:node1chi8o4qax423 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "GIN" .

<http://telegraphis.net/data/countries/GN#GN> code:hasCode _:node1chi8o4qax424 .

_:node1chi8o4qax424 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "324" .

<http://telegraphis.net/data/countries/GN#GN> code:hasCode _:node1chi8o4qax425 .

_:node1chi8o4qax425 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "GV" .

<http://telegraphis.net/data/countries/GN#GN> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Guinea"@en ;
	gn:population "10211000" ;
	owl:sameAs <http://dbpedia.org/resource/Guinea> , <http://sws.geonames.org/2420477/> , <http://www.geonames.org/countries/#GN> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Guinea> .

<http://telegraphis.net/data/countries/GP#GP> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/GP/Basse-Terre#BasseTerre> ;
	geographis:isoAlpha2 "GP" ;
	geographis:isoAlpha3 "GLP" ;
	geographis:isoNumeric "312" ;
	geographis:isoShortName "GUADELOUPE"@fr , "GUADELOUPE"@en ;
	geographis:landArea _:node1chi8o4qax426 .

_:node1chi8o4qax426 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "1780.0" .

<http://telegraphis.net/data/countries/GP#GP> geographis:onContinent <http://telegraphis.net/data/continents/NA#NA> ;
	code:hasCode _:node1chi8o4qax427 .

_:node1chi8o4qax427 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "GP" .

<http://telegraphis.net/data/countries/GP#GP> code:hasCode _:node1chi8o4qax428 .

_:node1chi8o4qax428 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "GLP" .

<http://telegraphis.net/data/countries/GP#GP> code:hasCode _:node1chi8o4qax429 .

_:node1chi8o4qax429 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "312" .

<http://telegraphis.net/data/countries/GP#GP> code:hasCode _:node1chi8o4qax430 .

_:node1chi8o4qax430 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "GP" .

<http://telegraphis.net/data/countries/GP#GP> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Guadeloupe"@en ;
	gn:population "443000" ;
	owl:sameAs <http://dbpedia.org/resource/Guadeloupe> , <http://sws.geonames.org/3579143/> , <http://www.geonames.org/countries/#GP> .

<http://telegraphis.net/data/countries/GQ#GQ> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/GQ/Malabo#Malabo> ;
	geographis:currency <http://telegraphis.net/data/currencies/XAF#XAF> ;
	geographis:isoAlpha2 "GQ" ;
	geographis:isoAlpha3 "GNQ" ;
	geographis:isoNumeric "226" ;
	geographis:isoShortName "EQUATORIAL GUINEA"@en , "GUINÉE ÉQUATORIALE"@fr ;
	geographis:landArea _:node1chi8o4qax431 .

_:node1chi8o4qax431 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "28051.0" .

<http://telegraphis.net/data/countries/GQ#GQ> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax432 .

_:node1chi8o4qax432 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "GQ" .

<http://telegraphis.net/data/countries/GQ#GQ> code:hasCode _:node1chi8o4qax433 .

_:node1chi8o4qax433 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "GNQ" .

<http://telegraphis.net/data/countries/GQ#GQ> code:hasCode _:node1chi8o4qax434 .

_:node1chi8o4qax434 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "226" .

<http://telegraphis.net/data/countries/GQ#GQ> code:hasCode _:node1chi8o4qax435 .

_:node1chi8o4qax435 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "EK" .

<http://telegraphis.net/data/countries/GQ#GQ> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Equatorial Guinea"@en ;
	gn:population "562000" ;
	owl:sameAs <http://dbpedia.org/resource/Equatorial_Guinea> , <http://sws.geonames.org/2309096/> , <http://www.geonames.org/countries/#GQ> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Equatorial_Guinea> .

<http://telegraphis.net/data/countries/GR#GR> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/GR/Athens#Athens> ;
	geographis:currency <http://telegraphis.net/data/currencies/EUR#EUR> ;
	geographis:isoAlpha2 "GR" ;
	geographis:isoAlpha3 "GRC" ;
	geographis:isoNumeric "300" ;
	geographis:isoShortName "GREECE"@en , "GRÈCE"@fr ;
	geographis:landArea _:node1chi8o4qax436 .

_:node1chi8o4qax436 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "131940.0" .

<http://telegraphis.net/data/countries/GR#GR> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax437 .

_:node1chi8o4qax437 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "GR" .

<http://telegraphis.net/data/countries/GR#GR> code:hasCode _:node1chi8o4qax438 .

_:node1chi8o4qax438 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "GRC" .

<http://telegraphis.net/data/countries/GR#GR> code:hasCode _:node1chi8o4qax439 .

_:node1chi8o4qax439 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "300" .

<http://telegraphis.net/data/countries/GR#GR> code:hasCode _:node1chi8o4qax440 .

_:node1chi8o4qax440 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "GR" .

<http://telegraphis.net/data/countries/GR#GR> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Greece"@en ;
	gn:population "10722000" ;
	owl:sameAs <http://dbpedia.org/resource/Greece> , <http://sws.geonames.org/390903/> , <http://www.geonames.org/countries/#GR> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Greece> .

<http://telegraphis.net/data/countries/GS#GS> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/GS/Grytviken#Grytviken> ;
	geographis:currency <http://telegraphis.net/data/currencies/GBP#GBP> ;
	geographis:isoAlpha2 "GS" ;
	geographis:isoAlpha3 "SGS" ;
	geographis:isoNumeric "239" ;
	geographis:isoShortName "GÉORGIE DU SUD ET LES ÎLES SANDWICH DU SUD"@fr , "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS"@en ;
	geographis:landArea _:node1chi8o4qax441 .

_:node1chi8o4qax441 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "3903.0" .

<http://telegraphis.net/data/countries/GS#GS> geographis:onContinent <http://telegraphis.net/data/continents/AN#AN> ;
	code:hasCode _:node1chi8o4qax442 .

_:node1chi8o4qax442 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "GS" .

<http://telegraphis.net/data/countries/GS#GS> code:hasCode _:node1chi8o4qax443 .

_:node1chi8o4qax443 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "SGS" .

<http://telegraphis.net/data/countries/GS#GS> code:hasCode _:node1chi8o4qax444 .

_:node1chi8o4qax444 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "239" .

<http://telegraphis.net/data/countries/GS#GS> code:hasCode _:node1chi8o4qax445 .

_:node1chi8o4qax445 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "SX" .

<http://telegraphis.net/data/countries/GS#GS> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "South Georgia and the South Sandwich Islands"@en ;
	gn:population "100" ;
	owl:sameAs <http://dbpedia.org/resource/South_Georgia_and_the_South_Sandwich_Islands> , <http://sws.geonames.org/3474415/> , <http://www.geonames.org/countries/#GS> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/South_Georgia_and_the_South_Sandwich_Islands> .

<http://telegraphis.net/data/countries/GT#GT> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/GT/Guatemala_City#GuatemalaCity> ;
	geographis:currency <http://telegraphis.net/data/currencies/GTQ#GTQ> ;
	geographis:isoAlpha2 "GT" ;
	geographis:isoAlpha3 "GTM" ;
	geographis:isoNumeric "320" ;
	geographis:isoShortName "GUATEMALA"@fr , "GUATEMALA"@en ;
	geographis:landArea _:node1chi8o4qax446 .

_:node1chi8o4qax446 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "108890.0" .

<http://telegraphis.net/data/countries/GT#GT> geographis:onContinent <http://telegraphis.net/data/continents/NA#NA> ;
	code:hasCode _:node1chi8o4qax447 .

_:node1chi8o4qax447 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "GT" .

<http://telegraphis.net/data/countries/GT#GT> code:hasCode _:node1chi8o4qax448 .

_:node1chi8o4qax448 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "GTM" .

<http://telegraphis.net/data/countries/GT#GT> code:hasCode _:node1chi8o4qax449 .

_:node1chi8o4qax449 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "320" .

<http://telegraphis.net/data/countries/GT#GT> code:hasCode _:node1chi8o4qax450 .

_:node1chi8o4qax450 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "GT" .

<http://telegraphis.net/data/countries/GT#GT> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Guatemala"@en ;
	gn:population "13002000" ;
	owl:sameAs <http://dbpedia.org/resource/Guatemala> , <http://sws.geonames.org/3595528/> , <http://www.geonames.org/countries/#GT> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Guatemala> .

<http://telegraphis.net/data/countries/GU#GU> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/GU/Hag%C3%A5t%C3%B1a#Hag%C3%A5t%C3%B1a> ;
	geographis:currency <http://telegraphis.net/data/currencies/USD#USD> ;
	geographis:isoAlpha2 "GU" ;
	geographis:isoAlpha3 "GUM" ;
	geographis:isoNumeric "316" ;
	geographis:isoShortName "GUAM"@fr , "GUAM"@en ;
	geographis:landArea _:node1chi8o4qax451 .

_:node1chi8o4qax451 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "549.0" .

<http://telegraphis.net/data/countries/GU#GU> geographis:onContinent <http://telegraphis.net/data/continents/OC#OC> ;
	code:hasCode _:node1chi8o4qax452 .

_:node1chi8o4qax452 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "GU" .

<http://telegraphis.net/data/countries/GU#GU> code:hasCode _:node1chi8o4qax453 .

_:node1chi8o4qax453 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "GUM" .

<http://telegraphis.net/data/countries/GU#GU> code:hasCode _:node1chi8o4qax454 .

_:node1chi8o4qax454 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "316" .

<http://telegraphis.net/data/countries/GU#GU> code:hasCode _:node1chi8o4qax455 .

_:node1chi8o4qax455 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "GQ" .

<http://telegraphis.net/data/countries/GU#GU> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Guam"@en ;
	gn:population "168564" ;
	owl:sameAs <http://dbpedia.org/resource/Guam> , <http://sws.geonames.org/4043988/> , <http://www.geonames.org/countries/#GU> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Guam> .

<http://telegraphis.net/data/countries/GW#GW> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/GW/Bissau#Bissau> ;
	geographis:currency <http://telegraphis.net/data/currencies/XOF#XOF> ;
	geographis:isoAlpha2 "GW" ;
	geographis:isoAlpha3 "GNB" ;
	geographis:isoNumeric "624" ;
	geographis:isoShortName "GUINEA-BISSAU"@en , "GUINÉE-BISSAU"@fr ;
	geographis:landArea _:node1chi8o4qax456 .

_:node1chi8o4qax456 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "36120.0" .

<http://telegraphis.net/data/countries/GW#GW> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax457 .

_:node1chi8o4qax457 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "GW" .

<http://telegraphis.net/data/countries/GW#GW> code:hasCode _:node1chi8o4qax458 .

_:node1chi8o4qax458 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "GNB" .

<http://telegraphis.net/data/countries/GW#GW> code:hasCode _:node1chi8o4qax459 .

_:node1chi8o4qax459 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "624" .

<http://telegraphis.net/data/countries/GW#GW> code:hasCode _:node1chi8o4qax460 .

_:node1chi8o4qax460 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "PU" .

<http://telegraphis.net/data/countries/GW#GW> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Guinea-Bissau"@en ;
	gn:population "1503000" ;
	owl:sameAs <http://dbpedia.org/resource/Guinea-Bissau> , <http://sws.geonames.org/2372248/> , <http://www.geonames.org/countries/#GW> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Guinea-Bissau> .

<http://telegraphis.net/data/countries/GY#GY> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/GY/Georgetown#Georgetown> ;
	geographis:currency <http://telegraphis.net/data/currencies/GYD#GYD> ;
	geographis:isoAlpha2 "GY" ;
	geographis:isoAlpha3 "GUY" ;
	geographis:isoNumeric "328" ;
	geographis:isoShortName "GUYANA"@fr , "GUYANA"@en ;
	geographis:landArea _:node1chi8o4qax461 .

_:node1chi8o4qax461 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "214970.0" .

<http://telegraphis.net/data/countries/GY#GY> geographis:onContinent <http://telegraphis.net/data/continents/SA#SA> ;
	code:hasCode _:node1chi8o4qax462 .

_:node1chi8o4qax462 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "GY" .

<http://telegraphis.net/data/countries/GY#GY> code:hasCode _:node1chi8o4qax463 .

_:node1chi8o4qax463 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "GUY" .

<http://telegraphis.net/data/countries/GY#GY> code:hasCode _:node1chi8o4qax464 .

_:node1chi8o4qax464 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "328" .

<http://telegraphis.net/data/countries/GY#GY> code:hasCode _:node1chi8o4qax465 .

_:node1chi8o4qax465 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "GY" .

<http://telegraphis.net/data/countries/GY#GY> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Guyana"@en ;
	gn:population "770000" ;
	owl:sameAs <http://dbpedia.org/resource/Guyana> , <http://sws.geonames.org/3378535/> , <http://www.geonames.org/countries/#GY> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Guyana> .

<http://telegraphis.net/data/countries/HK#HK> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/HK/Hong_Kong#HongKong> ;
	geographis:currency <http://telegraphis.net/data/currencies/HKD#HKD> ;
	geographis:isoAlpha2 "HK" ;
	geographis:isoAlpha3 "HKG" ;
	geographis:isoNumeric "344" ;
	geographis:isoShortName "HONG KONG"@en , "HONG-KONG"@fr ;
	geographis:landArea _:node1chi8o4qax466 .

_:node1chi8o4qax466 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "1092.0" .

<http://telegraphis.net/data/countries/HK#HK> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax467 .

_:node1chi8o4qax467 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "HK" .

<http://telegraphis.net/data/countries/HK#HK> code:hasCode _:node1chi8o4qax468 .

_:node1chi8o4qax468 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "HKG" .

<http://telegraphis.net/data/countries/HK#HK> code:hasCode _:node1chi8o4qax469 .

_:node1chi8o4qax469 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "344" .

<http://telegraphis.net/data/countries/HK#HK> code:hasCode _:node1chi8o4qax470 .

_:node1chi8o4qax470 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "HK" .

<http://telegraphis.net/data/countries/HK#HK> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Hong Kong"@en ;
	gn:population "6898686" ;
	owl:sameAs <http://dbpedia.org/resource/Hong_Kong> , <http://sws.geonames.org/1819730/> , <http://www.geonames.org/countries/#HK> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Hong_Kong> .

<http://telegraphis.net/data/countries/HM#HM> a gn:Country ;
	geographis:currency <http://telegraphis.net/data/currencies/AUD#AUD> ;
	geographis:isoAlpha2 "HM" ;
	geographis:isoAlpha3 "HMD" ;
	geographis:isoNumeric "334" ;
	geographis:isoShortName "HEARD ISLAND AND MCDONALD ISLANDS"@en , "HEARD, ÎLE ET MCDONALD, ÎLES"@fr ;
	geographis:landArea _:node1chi8o4qax471 .

_:node1chi8o4qax471 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "412.0" .

<http://telegraphis.net/data/countries/HM#HM> geographis:onContinent <http://telegraphis.net/data/continents/AN#AN> ;
	code:hasCode _:node1chi8o4qax472 .

_:node1chi8o4qax472 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "HM" .

<http://telegraphis.net/data/countries/HM#HM> code:hasCode _:node1chi8o4qax473 .

_:node1chi8o4qax473 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "HMD" .

<http://telegraphis.net/data/countries/HM#HM> code:hasCode _:node1chi8o4qax474 .

_:node1chi8o4qax474 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "334" .

<http://telegraphis.net/data/countries/HM#HM> code:hasCode _:node1chi8o4qax475 .

_:node1chi8o4qax475 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "HM" .

<http://telegraphis.net/data/countries/HM#HM> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Heard Island and McDonald Islands"@en ;
	gn:population "0" ;
	owl:sameAs <http://dbpedia.org/resource/Heard_Island_and_McDonald_Islands> , <http://sws.geonames.org/1547314/> , <http://www.geonames.org/countries/#HM> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Heard_Island_and_McDonald_Islands> .

<http://telegraphis.net/data/countries/HN#HN> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/HN/Tegucigalpa#Tegucigalpa> ;
	geographis:currency <http://telegraphis.net/data/currencies/HNL#HNL> ;
	geographis:isoAlpha2 "HN" ;
	geographis:isoAlpha3 "HND" ;
	geographis:isoNumeric "340" ;
	geographis:isoShortName "HONDURAS"@fr , "HONDURAS"@en ;
	geographis:landArea _:node1chi8o4qax476 .

_:node1chi8o4qax476 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "112090.0" .

<http://telegraphis.net/data/countries/HN#HN> geographis:onContinent <http://telegraphis.net/data/continents/NA#NA> ;
	code:hasCode _:node1chi8o4qax477 .

_:node1chi8o4qax477 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "HN" .

<http://telegraphis.net/data/countries/HN#HN> code:hasCode _:node1chi8o4qax478 .

_:node1chi8o4qax478 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "HND" .

<http://telegraphis.net/data/countries/HN#HN> code:hasCode _:node1chi8o4qax479 .

_:node1chi8o4qax479 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "340" .

<http://telegraphis.net/data/countries/HN#HN> code:hasCode _:node1chi8o4qax480 .

_:node1chi8o4qax480 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "HO" .

<http://telegraphis.net/data/countries/HN#HN> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Honduras"@en ;
	gn:population "7639000" ;
	owl:sameAs <http://dbpedia.org/resource/Honduras> , <http://sws.geonames.org/3608932/> , <http://www.geonames.org/countries/#HN> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Honduras> .

<http://telegraphis.net/data/countries/HR#HR> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/HR/Zagreb#Zagreb> ;
	geographis:currency <http://telegraphis.net/data/currencies/HRK#HRK> ;
	geographis:isoAlpha2 "HR" ;
	geographis:isoAlpha3 "HRV" ;
	geographis:isoNumeric "191" ;
	geographis:isoShortName "CROATIA"@en , "CROATIE"@fr ;
	geographis:landArea _:node1chi8o4qax481 .

_:node1chi8o4qax481 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "56542.0" .

<http://telegraphis.net/data/countries/HR#HR> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax482 .

_:node1chi8o4qax482 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "HR" .

<http://telegraphis.net/data/countries/HR#HR> code:hasCode _:node1chi8o4qax483 .

_:node1chi8o4qax483 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "HRV" .

<http://telegraphis.net/data/countries/HR#HR> code:hasCode _:node1chi8o4qax484 .

_:node1chi8o4qax484 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "191" .

<http://telegraphis.net/data/countries/HR#HR> code:hasCode _:node1chi8o4qax485 .

_:node1chi8o4qax485 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "HR" .

<http://telegraphis.net/data/countries/HR#HR> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Croatia"@en ;
	gn:population "4491000" ;
	owl:sameAs <http://dbpedia.org/resource/Croatia> , <http://sws.geonames.org/3202326/> , <http://www.geonames.org/countries/#HR> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Croatia> .

<http://telegraphis.net/data/countries/HT#HT> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/HT/Port-au-Prince#PortauPrince> ;
	geographis:currency <http://telegraphis.net/data/currencies/HTG#HTG> , <http://telegraphis.net/data/currencies/USD#USD> ;
	geographis:isoAlpha2 "HT" ;
	geographis:isoAlpha3 "HTI" ;
	geographis:isoNumeric "332" ;
	geographis:isoShortName "HAITI"@en , "HAÏTI"@fr ;
	geographis:landArea _:node1chi8o4qax486 .

_:node1chi8o4qax486 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "27750.0" .

<http://telegraphis.net/data/countries/HT#HT> geographis:onContinent <http://telegraphis.net/data/continents/NA#NA> ;
	code:hasCode _:node1chi8o4qax487 .

_:node1chi8o4qax487 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "HT" .

<http://telegraphis.net/data/countries/HT#HT> code:hasCode _:node1chi8o4qax488 .

_:node1chi8o4qax488 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "HTI" .

<http://telegraphis.net/data/countries/HT#HT> code:hasCode _:node1chi8o4qax489 .

_:node1chi8o4qax489 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "332" .

<http://telegraphis.net/data/countries/HT#HT> code:hasCode _:node1chi8o4qax490 .

_:node1chi8o4qax490 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "HA" .

<http://telegraphis.net/data/countries/HT#HT> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Haiti"@en ;
	gn:population "8924000" ;
	owl:sameAs <http://dbpedia.org/resource/Haiti> , <http://sws.geonames.org/3723988/> , <http://www.geonames.org/countries/#HT> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Haiti> .

<http://telegraphis.net/data/countries/HU#HU> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/HU/Budapest#Budapest> ;
	geographis:currency <http://telegraphis.net/data/currencies/HUF#HUF> ;
	geographis:isoAlpha2 "HU" ;
	geographis:isoAlpha3 "HUN" ;
	geographis:isoNumeric "348" ;
	geographis:isoShortName "HONGRIE"@fr , "HUNGARY"@en ;
	geographis:landArea _:node1chi8o4qax491 .

_:node1chi8o4qax491 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "93030.0" .

<http://telegraphis.net/data/countries/HU#HU> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax492 .

_:node1chi8o4qax492 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "HU" .

<http://telegraphis.net/data/countries/HU#HU> code:hasCode _:node1chi8o4qax493 .

_:node1chi8o4qax493 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "HUN" .

<http://telegraphis.net/data/countries/HU#HU> code:hasCode _:node1chi8o4qax494 .

_:node1chi8o4qax494 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "348" .

<http://telegraphis.net/data/countries/HU#HU> code:hasCode _:node1chi8o4qax495 .

_:node1chi8o4qax495 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "HU" .

<http://telegraphis.net/data/countries/HU#HU> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Hungary"@en ;
	gn:population "9930000" ;
	owl:sameAs <http://dbpedia.org/resource/Hungary> , <http://sws.geonames.org/719819/> , <http://www.geonames.org/countries/#HU> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Hungary> .

<http://telegraphis.net/data/countries/ID#ID> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/ID/Jakarta#Jakarta> ;
	geographis:currency <http://telegraphis.net/data/currencies/IDR#IDR> ;
	geographis:isoAlpha2 "ID" ;
	geographis:isoAlpha3 "IDN" ;
	geographis:isoNumeric "360" ;
	geographis:isoShortName "INDONESIA"@en , "INDONÉSIE"@fr ;
	geographis:landArea _:node1chi8o4qax496 .

_:node1chi8o4qax496 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "1919440.0" .

<http://telegraphis.net/data/countries/ID#ID> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax497 .

_:node1chi8o4qax497 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "ID" .

<http://telegraphis.net/data/countries/ID#ID> code:hasCode _:node1chi8o4qax498 .

_:node1chi8o4qax498 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "IDN" .

<http://telegraphis.net/data/countries/ID#ID> code:hasCode _:node1chi8o4qax499 .

_:node1chi8o4qax499 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "360" .

<http://telegraphis.net/data/countries/ID#ID> code:hasCode _:node1chi8o4qax500 .

_:node1chi8o4qax500 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "ID" .

<http://telegraphis.net/data/countries/ID#ID> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Indonesia"@en ;
	gn:population "237512000" ;
	owl:sameAs <http://dbpedia.org/resource/Indonesia> , <http://sws.geonames.org/1643084/> , <http://www.geonames.org/countries/#ID> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Indonesia> .

<http://telegraphis.net/data/countries/IE#IE> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/IE/Dublin#Dublin> ;
	geographis:currency <http://telegraphis.net/data/currencies/EUR#EUR> ;
	geographis:isoAlpha2 "IE" ;
	geographis:isoAlpha3 "IRL" ;
	geographis:isoNumeric "372" ;
	geographis:isoShortName "IRELAND"@en , "IRLANDE"@fr ;
	geographis:landArea _:node1chi8o4qax501 .

_:node1chi8o4qax501 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "70280.0" .

<http://telegraphis.net/data/countries/IE#IE> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax502 .

_:node1chi8o4qax502 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "IE" .

<http://telegraphis.net/data/countries/IE#IE> code:hasCode _:node1chi8o4qax503 .

_:node1chi8o4qax503 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "IRL" .

<http://telegraphis.net/data/countries/IE#IE> code:hasCode _:node1chi8o4qax504 .

_:node1chi8o4qax504 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "372" .

<http://telegraphis.net/data/countries/IE#IE> code:hasCode _:node1chi8o4qax505 .

_:node1chi8o4qax505 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "EI" .

<http://telegraphis.net/data/countries/IE#IE> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Ireland"@en ;
	gn:population "4156000" ;
	owl:sameAs <http://dbpedia.org/resource/Republic_of_Ireland> , <http://sws.geonames.org/2963597/> , <http://www.geonames.org/countries/#IE> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Ireland> .

<http://telegraphis.net/data/countries/IL#IL> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/IL/Jerusalem#Jerusalem> ;
	geographis:currency <http://telegraphis.net/data/currencies/ILS#ILS> ;
	geographis:isoAlpha2 "IL" ;
	geographis:isoAlpha3 "ISR" ;
	geographis:isoNumeric "376" ;
	geographis:isoShortName "ISRAEL"@en , "ISRAËL"@fr ;
	geographis:landArea _:node1chi8o4qax506 .

_:node1chi8o4qax506 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "20770.0" .

<http://telegraphis.net/data/countries/IL#IL> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax507 .

_:node1chi8o4qax507 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "IL" .

<http://telegraphis.net/data/countries/IL#IL> code:hasCode _:node1chi8o4qax508 .

_:node1chi8o4qax508 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "ISR" .

<http://telegraphis.net/data/countries/IL#IL> code:hasCode _:node1chi8o4qax509 .

_:node1chi8o4qax509 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "376" .

<http://telegraphis.net/data/countries/IL#IL> code:hasCode _:node1chi8o4qax510 .

_:node1chi8o4qax510 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "IS" .

<http://telegraphis.net/data/countries/IL#IL> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Israel"@en ;
	gn:population "6500000" ;
	owl:sameAs <http://dbpedia.org/resource/Israel> , <http://sws.geonames.org/294640/> , <http://www.geonames.org/countries/#IL> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Israel> .

<http://telegraphis.net/data/countries/IM#IM> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/IM/Douglas%2C_Isle_of_Man#Douglas%2CIsleofMan> ;
	geographis:currency <http://telegraphis.net/data/currencies/GBP#GBP> ;
	geographis:isoAlpha2 "IM" ;
	geographis:isoAlpha3 "IMN" ;
	geographis:isoNumeric "833" ;
	geographis:isoShortName "ISLE OF MAN"@en , "ÎLE DE MAN"@fr ;
	geographis:landArea _:node1chi8o4qax511 .

_:node1chi8o4qax511 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "572.0" .

<http://telegraphis.net/data/countries/IM#IM> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax512 .

_:node1chi8o4qax512 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "IM" .

<http://telegraphis.net/data/countries/IM#IM> code:hasCode _:node1chi8o4qax513 .

_:node1chi8o4qax513 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "IMN" .

<http://telegraphis.net/data/countries/IM#IM> code:hasCode _:node1chi8o4qax514 .

_:node1chi8o4qax514 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "833" .

<http://telegraphis.net/data/countries/IM#IM> code:hasCode _:node1chi8o4qax515 .

_:node1chi8o4qax515 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "IM" .

<http://telegraphis.net/data/countries/IM#IM> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Isle of Man"@en ;
	gn:population "75049" ;
	owl:sameAs <http://dbpedia.org/resource/Isle_of_Man> , <http://sws.geonames.org/3042225/> , <http://www.geonames.org/countries/#IM> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Isle_of_Man> .

<http://telegraphis.net/data/countries/IN#IN> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/IN/New_Delhi#NewDelhi> ;
	geographis:currency <http://telegraphis.net/data/currencies/INR#INR> ;
	geographis:isoAlpha2 "IN" ;
	geographis:isoAlpha3 "IND" ;
	geographis:isoNumeric "356" ;
	geographis:isoShortName "INDE"@fr , "INDIA"@en ;
	geographis:landArea _:node1chi8o4qax516 .

_:node1chi8o4qax516 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "3287590.0" .

<http://telegraphis.net/data/countries/IN#IN> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax517 .

_:node1chi8o4qax517 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "IN" .

<http://telegraphis.net/data/countries/IN#IN> code:hasCode _:node1chi8o4qax518 .

_:node1chi8o4qax518 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "IND" .

<http://telegraphis.net/data/countries/IN#IN> code:hasCode _:node1chi8o4qax519 .

_:node1chi8o4qax519 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "356" .

<http://telegraphis.net/data/countries/IN#IN> code:hasCode _:node1chi8o4qax520 .

_:node1chi8o4qax520 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "IN" .

<http://telegraphis.net/data/countries/IN#IN> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "India"@en ;
	gn:population "1147995000" ;
	owl:sameAs <http://dbpedia.org/resource/India> , <http://sws.geonames.org/1269750/> , <http://www.geonames.org/countries/#IN> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/India> .

<http://telegraphis.net/data/countries/IO#IO> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/IO/Diego_Garcia#DiegoGarcia> ;
	geographis:currency <http://telegraphis.net/data/currencies/GBP#GBP> , <http://telegraphis.net/data/currencies/USD#USD> ;
	geographis:isoAlpha2 "IO" ;
	geographis:isoAlpha3 "IOT" ;
	geographis:isoNumeric "086" ;
	geographis:isoShortName "BRITISH INDIAN OCEAN TERRITORY"@en , "OCÉAN INDIEN, TERRITOIRE BRITANNIQUE DE L'"@fr ;
	geographis:landArea _:node1chi8o4qax521 .

_:node1chi8o4qax521 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "60.0" .

<http://telegraphis.net/data/countries/IO#IO> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax522 .

_:node1chi8o4qax522 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "IO" .

<http://telegraphis.net/data/countries/IO#IO> code:hasCode _:node1chi8o4qax523 .

_:node1chi8o4qax523 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "IOT" .

<http://telegraphis.net/data/countries/IO#IO> code:hasCode _:node1chi8o4qax524 .

_:node1chi8o4qax524 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "086" .

<http://telegraphis.net/data/countries/IO#IO> code:hasCode _:node1chi8o4qax525 .

_:node1chi8o4qax525 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "IO" .

<http://telegraphis.net/data/countries/IO#IO> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "British Indian Ocean Territory"@en ;
	gn:population "0" ;
	owl:sameAs <http://dbpedia.org/resource/British_Indian_Ocean_Territory> , <http://sws.geonames.org/1282588/> , <http://www.geonames.org/countries/#IO> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/British_Indian_Ocean_Territory> .

<http://telegraphis.net/data/countries/IQ#IQ> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/IQ/Baghdad#Baghdad> ;
	geographis:currency <http://telegraphis.net/data/currencies/IQD#IQD> ;
	geographis:isoAlpha2 "IQ" ;
	geographis:isoAlpha3 "IRQ" ;
	geographis:isoNumeric "368" ;
	geographis:isoShortName "IRAQ"@fr , "IRAQ"@en ;
	geographis:landArea _:node1chi8o4qax526 .

_:node1chi8o4qax526 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "437072.0" .

<http://telegraphis.net/data/countries/IQ#IQ> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax527 .

_:node1chi8o4qax527 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "IQ" .

<http://telegraphis.net/data/countries/IQ#IQ> code:hasCode _:node1chi8o4qax528 .

_:node1chi8o4qax528 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "IRQ" .

<http://telegraphis.net/data/countries/IQ#IQ> code:hasCode _:node1chi8o4qax529 .

_:node1chi8o4qax529 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "368" .

<http://telegraphis.net/data/countries/IQ#IQ> code:hasCode _:node1chi8o4qax530 .

_:node1chi8o4qax530 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "IZ" .

<http://telegraphis.net/data/countries/IQ#IQ> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Iraq"@en ;
	gn:population "28221000" ;
	owl:sameAs <http://dbpedia.org/resource/Iraq> , <http://sws.geonames.org/99237/> , <http://www.geonames.org/countries/#IQ> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Iraq> .

<http://telegraphis.net/data/countries/IR#IR> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/IR/Tehran#Tehran> ;
	geographis:currency <http://telegraphis.net/data/currencies/IRR#IRR> ;
	geographis:isoAlpha2 "IR" ;
	geographis:isoAlpha3 "IRN" ;
	geographis:isoNumeric "364" ;
	geographis:isoShortName "IRAN, ISLAMIC REPUBLIC OF"@en , "IRAN, RÉPUBLIQUE ISLAMIQUE D'"@fr ;
	geographis:landArea _:node1chi8o4qax531 .

_:node1chi8o4qax531 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "1648000.0" .

<http://telegraphis.net/data/countries/IR#IR> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax532 .

_:node1chi8o4qax532 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "IR" .

<http://telegraphis.net/data/countries/IR#IR> code:hasCode _:node1chi8o4qax533 .

_:node1chi8o4qax533 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "IRN" .

<http://telegraphis.net/data/countries/IR#IR> code:hasCode _:node1chi8o4qax534 .

_:node1chi8o4qax534 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "364" .

<http://telegraphis.net/data/countries/IR#IR> code:hasCode _:node1chi8o4qax535 .

_:node1chi8o4qax535 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "IR" .

<http://telegraphis.net/data/countries/IR#IR> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Iran"@en ;
	gn:population "65875000" ;
	owl:sameAs <http://dbpedia.org/resource/Iran> , <http://sws.geonames.org/130758/> , <http://www.geonames.org/countries/#IR> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Iran> .

<http://telegraphis.net/data/countries/IS#IS> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/IS/Reykjav%C3%ADk#Reykjav%C3%ADk> ;
	geographis:currency <http://telegraphis.net/data/currencies/ISK#ISK> ;
	geographis:isoAlpha2 "IS" ;
	geographis:isoAlpha3 "ISL" ;
	geographis:isoNumeric "352" ;
	geographis:isoShortName "ICELAND"@en , "ISLANDE"@fr ;
	geographis:landArea _:node1chi8o4qax536 .

_:node1chi8o4qax536 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "103000.0" .

<http://telegraphis.net/data/countries/IS#IS> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax537 .

_:node1chi8o4qax537 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "IS" .

<http://telegraphis.net/data/countries/IS#IS> code:hasCode _:node1chi8o4qax538 .

_:node1chi8o4qax538 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "ISL" .

<http://telegraphis.net/data/countries/IS#IS> code:hasCode _:node1chi8o4qax539 .

_:node1chi8o4qax539 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "352" .

<http://telegraphis.net/data/countries/IS#IS> code:hasCode _:node1chi8o4qax540 .

_:node1chi8o4qax540 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "IC" .

<http://telegraphis.net/data/countries/IS#IS> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Iceland"@en ;
	gn:population "304000" ;
	owl:sameAs <http://dbpedia.org/resource/Iceland> , <http://sws.geonames.org/2629691/> , <http://www.geonames.org/countries/#IS> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Iceland> .

<http://telegraphis.net/data/countries/IT#IT> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/IT/Rome#Rome> ;
	geographis:currency <http://telegraphis.net/data/currencies/EUR#EUR> ;
	geographis:isoAlpha2 "IT" ;
	geographis:isoAlpha3 "ITA" ;
	geographis:isoNumeric "380" ;
	geographis:isoShortName "ITALIE"@fr , "ITALY"@en ;
	geographis:landArea _:node1chi8o4qax541 .

_:node1chi8o4qax541 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "301230.0" .

<http://telegraphis.net/data/countries/IT#IT> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax542 .

_:node1chi8o4qax542 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "IT" .

<http://telegraphis.net/data/countries/IT#IT> code:hasCode _:node1chi8o4qax543 .

_:node1chi8o4qax543 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "ITA" .

<http://telegraphis.net/data/countries/IT#IT> code:hasCode _:node1chi8o4qax544 .

_:node1chi8o4qax544 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "380" .

<http://telegraphis.net/data/countries/IT#IT> code:hasCode _:node1chi8o4qax545 .

_:node1chi8o4qax545 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "IT" .

<http://telegraphis.net/data/countries/IT#IT> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Italy"@en ;
	gn:population "58145000" ;
	owl:sameAs <http://dbpedia.org/resource/Italy> , <http://sws.geonames.org/3175395/> , <http://www.geonames.org/countries/#IT> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Italy> .

<http://telegraphis.net/data/countries/JE#JE> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/JE/Saint_Helier#SaintHelier> ;
	geographis:currency <http://telegraphis.net/data/currencies/GBP#GBP> ;
	geographis:isoAlpha2 "JE" ;
	geographis:isoAlpha3 "JEY" ;
	geographis:isoNumeric "832" ;
	geographis:isoShortName "JERSEY"@fr , "JERSEY"@en ;
	geographis:landArea _:node1chi8o4qax546 .

_:node1chi8o4qax546 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "116.0" .

<http://telegraphis.net/data/countries/JE#JE> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax547 .

_:node1chi8o4qax547 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "JE" .

<http://telegraphis.net/data/countries/JE#JE> code:hasCode _:node1chi8o4qax548 .

_:node1chi8o4qax548 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "JEY" .

<http://telegraphis.net/data/countries/JE#JE> code:hasCode _:node1chi8o4qax549 .

_:node1chi8o4qax549 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "832" .

<http://telegraphis.net/data/countries/JE#JE> code:hasCode _:node1chi8o4qax550 .

_:node1chi8o4qax550 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "JE" .

<http://telegraphis.net/data/countries/JE#JE> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Jersey"@en ;
	gn:population "90812" ;
	owl:sameAs <http://dbpedia.org/resource/Jersey> , <http://sws.geonames.org/3042142/> , <http://www.geonames.org/countries/#JE> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Jersey> .

<http://telegraphis.net/data/countries/JM#JM> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/JM/Kingston#Kingston> ;
	geographis:currency <http://telegraphis.net/data/currencies/JMD#JMD> ;
	geographis:isoAlpha2 "JM" ;
	geographis:isoAlpha3 "JAM" ;
	geographis:isoNumeric "388" ;
	geographis:isoShortName "JAMAICA"@en , "JAMAÏQUE"@fr ;
	geographis:landArea _:node1chi8o4qax551 .

_:node1chi8o4qax551 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "10991.0" .

<http://telegraphis.net/data/countries/JM#JM> geographis:onContinent <http://telegraphis.net/data/continents/NA#NA> ;
	code:hasCode _:node1chi8o4qax552 .

_:node1chi8o4qax552 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "JM" .

<http://telegraphis.net/data/countries/JM#JM> code:hasCode _:node1chi8o4qax553 .

_:node1chi8o4qax553 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "JAM" .

<http://telegraphis.net/data/countries/JM#JM> code:hasCode _:node1chi8o4qax554 .

_:node1chi8o4qax554 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "388" .

<http://telegraphis.net/data/countries/JM#JM> code:hasCode _:node1chi8o4qax555 .

_:node1chi8o4qax555 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "JM" .

<http://telegraphis.net/data/countries/JM#JM> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Jamaica"@en ;
	gn:population "2801000" ;
	owl:sameAs <http://dbpedia.org/resource/Jamaica> , <http://sws.geonames.org/3489940/> , <http://www.geonames.org/countries/#JM> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Jamaica> .

<http://telegraphis.net/data/countries/JO#JO> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/JO/Amman#Amman> ;
	geographis:currency <http://telegraphis.net/data/currencies/JOD#JOD> ;
	geographis:isoAlpha2 "JO" ;
	geographis:isoAlpha3 "JOR" ;
	geographis:isoNumeric "400" ;
	geographis:isoShortName "JORDAN"@en , "JORDANIE"@fr ;
	geographis:landArea _:node1chi8o4qax556 .

_:node1chi8o4qax556 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "92300.0" .

<http://telegraphis.net/data/countries/JO#JO> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax557 .

_:node1chi8o4qax557 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "JO" .

<http://telegraphis.net/data/countries/JO#JO> code:hasCode _:node1chi8o4qax558 .

_:node1chi8o4qax558 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "JOR" .

<http://telegraphis.net/data/countries/JO#JO> code:hasCode _:node1chi8o4qax559 .

_:node1chi8o4qax559 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "400" .

<http://telegraphis.net/data/countries/JO#JO> code:hasCode _:node1chi8o4qax560 .

_:node1chi8o4qax560 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "JO" .

<http://telegraphis.net/data/countries/JO#JO> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Jordan"@en ;
	gn:population "6198000" ;
	owl:sameAs <http://dbpedia.org/resource/Jordan> , <http://sws.geonames.org/248816/> , <http://www.geonames.org/countries/#JO> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Jordan> .

<http://telegraphis.net/data/countries/JP#JP> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/JP/Tokyo#Tokyo> ;
	geographis:currency <http://telegraphis.net/data/currencies/JPY#JPY> ;
	geographis:isoAlpha2 "JP" ;
	geographis:isoAlpha3 "JPN" ;
	geographis:isoNumeric "392" ;
	geographis:isoShortName "JAPAN"@en , "JAPON"@fr ;
	geographis:landArea _:node1chi8o4qax561 .

_:node1chi8o4qax561 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "377835.0" .

<http://telegraphis.net/data/countries/JP#JP> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax562 .

_:node1chi8o4qax562 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "JP" .

<http://telegraphis.net/data/countries/JP#JP> code:hasCode _:node1chi8o4qax563 .

_:node1chi8o4qax563 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "JPN" .

<http://telegraphis.net/data/countries/JP#JP> code:hasCode _:node1chi8o4qax564 .

_:node1chi8o4qax564 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "392" .

<http://telegraphis.net/data/countries/JP#JP> code:hasCode _:node1chi8o4qax565 .

_:node1chi8o4qax565 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "JA" .

<http://telegraphis.net/data/countries/JP#JP> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Japan"@en ;
	gn:population "127288000" ;
	owl:sameAs <http://dbpedia.org/resource/Japan> , <http://sws.geonames.org/1861060/> , <http://www.geonames.org/countries/#JP> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Japan> .

<http://telegraphis.net/data/countries/KE#KE> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/KE/Nairobi#Nairobi> ;
	geographis:currency <http://telegraphis.net/data/currencies/KES#KES> ;
	geographis:isoAlpha2 "KE" ;
	geographis:isoAlpha3 "KEN" ;
	geographis:isoNumeric "404" ;
	geographis:isoShortName "KENYA"@fr , "KENYA"@en ;
	geographis:landArea _:node1chi8o4qax566 .

_:node1chi8o4qax566 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "582650.0" .

<http://telegraphis.net/data/countries/KE#KE> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax567 .

_:node1chi8o4qax567 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "KE" .

<http://telegraphis.net/data/countries/KE#KE> code:hasCode _:node1chi8o4qax568 .

_:node1chi8o4qax568 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "KEN" .

<http://telegraphis.net/data/countries/KE#KE> code:hasCode _:node1chi8o4qax569 .

_:node1chi8o4qax569 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "404" .

<http://telegraphis.net/data/countries/KE#KE> code:hasCode _:node1chi8o4qax570 .

_:node1chi8o4qax570 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "KE" .

<http://telegraphis.net/data/countries/KE#KE> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Kenya"@en ;
	gn:population "37953000" ;
	owl:sameAs <http://dbpedia.org/resource/Kenya> , <http://sws.geonames.org/192950/> , <http://www.geonames.org/countries/#KE> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Kenya> .

<http://telegraphis.net/data/countries/KG#KG> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/KG/Bishkek#Bishkek> ;
	geographis:currency <http://telegraphis.net/data/currencies/KGS#KGS> ;
	geographis:isoAlpha2 "KG" ;
	geographis:isoAlpha3 "KGZ" ;
	geographis:isoNumeric "417" ;
	geographis:isoShortName "KIRGHIZISTAN"@fr , "KYRGYZSTAN"@en ;
	geographis:landArea _:node1chi8o4qax571 .

_:node1chi8o4qax571 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "198500.0" .

<http://telegraphis.net/data/countries/KG#KG> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax572 .

_:node1chi8o4qax572 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "KG" .

<http://telegraphis.net/data/countries/KG#KG> code:hasCode _:node1chi8o4qax573 .

_:node1chi8o4qax573 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "KGZ" .

<http://telegraphis.net/data/countries/KG#KG> code:hasCode _:node1chi8o4qax574 .

_:node1chi8o4qax574 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "417" .

<http://telegraphis.net/data/countries/KG#KG> code:hasCode _:node1chi8o4qax575 .

_:node1chi8o4qax575 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "KG" .

<http://telegraphis.net/data/countries/KG#KG> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Kyrgyzstan"@en ;
	gn:population "5356000" ;
	owl:sameAs <http://dbpedia.org/resource/Kyrgyzstan> , <http://sws.geonames.org/1527747/> , <http://www.geonames.org/countries/#KG> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Kyrgyzstan> .

<http://telegraphis.net/data/countries/KH#KH> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/KH/Phnom_Penh#PhnomPenh> ;
	geographis:currency <http://telegraphis.net/data/currencies/KHR#KHR> ;
	geographis:isoAlpha2 "KH" ;
	geographis:isoAlpha3 "KHM" ;
	geographis:isoNumeric "116" ;
	geographis:isoShortName "CAMBODGE"@fr , "CAMBODIA"@en ;
	geographis:landArea _:node1chi8o4qax576 .

_:node1chi8o4qax576 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "181040.0" .

<http://telegraphis.net/data/countries/KH#KH> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax577 .

_:node1chi8o4qax577 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "KH" .

<http://telegraphis.net/data/countries/KH#KH> code:hasCode _:node1chi8o4qax578 .

_:node1chi8o4qax578 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "KHM" .

<http://telegraphis.net/data/countries/KH#KH> code:hasCode _:node1chi8o4qax579 .

_:node1chi8o4qax579 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "116" .

<http://telegraphis.net/data/countries/KH#KH> code:hasCode _:node1chi8o4qax580 .

_:node1chi8o4qax580 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "CB" .

<http://telegraphis.net/data/countries/KH#KH> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Cambodia"@en ;
	gn:population "14241000" ;
	owl:sameAs <http://dbpedia.org/resource/Cambodia> , <http://sws.geonames.org/1831722/> , <http://www.geonames.org/countries/#KH> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Cambodia> .

<http://telegraphis.net/data/countries/KI#KI> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/KI/South_Tarawa#SouthTarawa> ;
	geographis:currency <http://telegraphis.net/data/currencies/AUD#AUD> ;
	geographis:isoAlpha2 "KI" ;
	geographis:isoAlpha3 "KIR" ;
	geographis:isoNumeric "296" ;
	geographis:isoShortName "KIRIBATI"@fr , "KIRIBATI"@en ;
	geographis:landArea _:node1chi8o4qax581 .

_:node1chi8o4qax581 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "811.0" .

<http://telegraphis.net/data/countries/KI#KI> geographis:onContinent <http://telegraphis.net/data/continents/OC#OC> ;
	code:hasCode _:node1chi8o4qax582 .

_:node1chi8o4qax582 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "KI" .

<http://telegraphis.net/data/countries/KI#KI> code:hasCode _:node1chi8o4qax583 .

_:node1chi8o4qax583 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "KIR" .

<http://telegraphis.net/data/countries/KI#KI> code:hasCode _:node1chi8o4qax584 .

_:node1chi8o4qax584 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "296" .

<http://telegraphis.net/data/countries/KI#KI> code:hasCode _:node1chi8o4qax585 .

_:node1chi8o4qax585 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "KR" .

<http://telegraphis.net/data/countries/KI#KI> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Kiribati"@en ;
	gn:population "110000" ;
	owl:sameAs <http://dbpedia.org/resource/Kiribati> , <http://sws.geonames.org/4030945/> , <http://www.geonames.org/countries/#KI> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Kiribati> .

<http://telegraphis.net/data/countries/KM#KM> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/KM/Moroni#Moroni> ;
	geographis:currency <http://telegraphis.net/data/currencies/KMF#KMF> ;
	geographis:isoAlpha2 "KM" ;
	geographis:isoAlpha3 "COM" ;
	geographis:isoNumeric "174" ;
	geographis:isoShortName "COMORES"@fr , "COMOROS"@en ;
	geographis:landArea _:node1chi8o4qax586 .

_:node1chi8o4qax586 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "2170.0" .

<http://telegraphis.net/data/countries/KM#KM> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax587 .

_:node1chi8o4qax587 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "KM" .

<http://telegraphis.net/data/countries/KM#KM> code:hasCode _:node1chi8o4qax588 .

_:node1chi8o4qax588 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "COM" .

<http://telegraphis.net/data/countries/KM#KM> code:hasCode _:node1chi8o4qax589 .

_:node1chi8o4qax589 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "174" .

<http://telegraphis.net/data/countries/KM#KM> code:hasCode _:node1chi8o4qax590 .

_:node1chi8o4qax590 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "CN" .

<http://telegraphis.net/data/countries/KM#KM> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Comoros"@en ;
	gn:population "731000" ;
	owl:sameAs <http://dbpedia.org/resource/Comoros> , <http://sws.geonames.org/921929/> , <http://www.geonames.org/countries/#KM> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Comoros> .

<http://telegraphis.net/data/countries/KN#KN> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/KN/Basseterre#Basseterre> ;
	geographis:currency <http://telegraphis.net/data/currencies/XCD#XCD> ;
	geographis:isoAlpha2 "KN" ;
	geographis:isoAlpha3 "KNA" ;
	geographis:isoNumeric "659" ;
	geographis:isoShortName "SAINT KITTS AND NEVIS"@en , "SAINT-KITTS-ET-NEVIS"@fr ;
	geographis:landArea _:node1chi8o4qax591 .

_:node1chi8o4qax591 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "261.0" .

<http://telegraphis.net/data/countries/KN#KN> geographis:onContinent <http://telegraphis.net/data/continents/NA#NA> ;
	code:hasCode _:node1chi8o4qax592 .

_:node1chi8o4qax592 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "KN" .

<http://telegraphis.net/data/countries/KN#KN> code:hasCode _:node1chi8o4qax593 .

_:node1chi8o4qax593 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "KNA" .

<http://telegraphis.net/data/countries/KN#KN> code:hasCode _:node1chi8o4qax594 .

_:node1chi8o4qax594 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "659" .

<http://telegraphis.net/data/countries/KN#KN> code:hasCode _:node1chi8o4qax595 .

_:node1chi8o4qax595 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "SC" .

<http://telegraphis.net/data/countries/KN#KN> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Saint Kitts and Nevis"@en ;
	gn:population "39000" ;
	owl:sameAs <http://dbpedia.org/resource/Saint_Kitts_and_Nevis> , <http://sws.geonames.org/3575174/> , <http://www.geonames.org/countries/#KN> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Saint_Kitts_and_Nevis> .

<http://telegraphis.net/data/countries/KP#KP> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/KP/Pyongyang#Pyongyang> ;
	geographis:currency <http://telegraphis.net/data/currencies/KPW#KPW> ;
	geographis:isoAlpha2 "KP" ;
	geographis:isoAlpha3 "PRK" ;
	geographis:isoNumeric "408" ;
	geographis:isoShortName "CORÉE, RÉPUBLIQUE POPULAIRE DÉMOCRATIQUE DE"@fr , "KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF"@en ;
	geographis:landArea _:node1chi8o4qax596 .

_:node1chi8o4qax596 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "120540.0" .

<http://telegraphis.net/data/countries/KP#KP> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax597 .

_:node1chi8o4qax597 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "KP" .

<http://telegraphis.net/data/countries/KP#KP> code:hasCode _:node1chi8o4qax598 .

_:node1chi8o4qax598 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "PRK" .

<http://telegraphis.net/data/countries/KP#KP> code:hasCode _:node1chi8o4qax599 .

_:node1chi8o4qax599 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "408" .

<http://telegraphis.net/data/countries/KP#KP> code:hasCode _:node1chi8o4qax600 .

_:node1chi8o4qax600 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "KN" .

<http://telegraphis.net/data/countries/KP#KP> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "North Korea"@en ;
	gn:population "22912177" ;
	owl:sameAs <http://dbpedia.org/resource/North_Korea> , <http://sws.geonames.org/1873107/> , <http://www.geonames.org/countries/#KP> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Korea_North> .

<http://telegraphis.net/data/countries/KR#KR> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/KR/Seoul#Seoul> ;
	geographis:currency <http://telegraphis.net/data/currencies/KRW#KRW> ;
	geographis:isoAlpha2 "KR" ;
	geographis:isoAlpha3 "KOR" ;
	geographis:isoNumeric "410" ;
	geographis:isoShortName "CORÉE, RÉPUBLIQUE DE"@fr , "KOREA, REPUBLIC OF"@en ;
	geographis:landArea _:node1chi8o4qax601 .

_:node1chi8o4qax601 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "98480.0" .

<http://telegraphis.net/data/countries/KR#KR> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax602 .

_:node1chi8o4qax602 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "KR" .

<http://telegraphis.net/data/countries/KR#KR> code:hasCode _:node1chi8o4qax603 .

_:node1chi8o4qax603 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "KOR" .

<http://telegraphis.net/data/countries/KR#KR> code:hasCode _:node1chi8o4qax604 .

_:node1chi8o4qax604 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "410" .

<http://telegraphis.net/data/countries/KR#KR> code:hasCode _:node1chi8o4qax605 .

_:node1chi8o4qax605 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "KS" .

<http://telegraphis.net/data/countries/KR#KR> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "South Korea"@en ;
	gn:population "48422644" ;
	owl:sameAs <http://dbpedia.org/resource/South_Korea> , <http://sws.geonames.org/1835841/> , <http://www.geonames.org/countries/#KR> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Korea_South> .

<http://telegraphis.net/data/countries/KW#KW> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/KW/Kuwait_City#KuwaitCity> ;
	geographis:currency <http://telegraphis.net/data/currencies/KWD#KWD> ;
	geographis:isoAlpha2 "KW" ;
	geographis:isoAlpha3 "KWT" ;
	geographis:isoNumeric "414" ;
	geographis:isoShortName "KOWEÏT"@fr , "KUWAIT"@en ;
	geographis:landArea _:node1chi8o4qax606 .

_:node1chi8o4qax606 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "17820.0" .

<http://telegraphis.net/data/countries/KW#KW> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax607 .

_:node1chi8o4qax607 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "KW" .

<http://telegraphis.net/data/countries/KW#KW> code:hasCode _:node1chi8o4qax608 .

_:node1chi8o4qax608 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "KWT" .

<http://telegraphis.net/data/countries/KW#KW> code:hasCode _:node1chi8o4qax609 .

_:node1chi8o4qax609 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "414" .

<http://telegraphis.net/data/countries/KW#KW> code:hasCode _:node1chi8o4qax610 .

_:node1chi8o4qax610 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "KU" .

<http://telegraphis.net/data/countries/KW#KW> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Kuwait"@en ;
	gn:population "2596000" ;
	owl:sameAs <http://dbpedia.org/resource/Kuwait> , <http://sws.geonames.org/285570/> , <http://www.geonames.org/countries/#KW> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Kuwait> .

<http://telegraphis.net/data/countries/KY#KY> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/KY/George_Town#GeorgeTown> ;
	geographis:currency <http://telegraphis.net/data/currencies/KYD#KYD> ;
	geographis:isoAlpha2 "KY" ;
	geographis:isoAlpha3 "CYM" ;
	geographis:isoNumeric "136" ;
	geographis:isoShortName "CAYMAN ISLANDS"@en , "CAÏMANES, ÎLES"@fr ;
	geographis:landArea _:node1chi8o4qax611 .

_:node1chi8o4qax611 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "262.0" .

<http://telegraphis.net/data/countries/KY#KY> geographis:onContinent <http://telegraphis.net/data/continents/NA#NA> ;
	code:hasCode _:node1chi8o4qax612 .

_:node1chi8o4qax612 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "KY" .

<http://telegraphis.net/data/countries/KY#KY> code:hasCode _:node1chi8o4qax613 .

_:node1chi8o4qax613 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "CYM" .

<http://telegraphis.net/data/countries/KY#KY> code:hasCode _:node1chi8o4qax614 .

_:node1chi8o4qax614 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "136" .

<http://telegraphis.net/data/countries/KY#KY> code:hasCode _:node1chi8o4qax615 .

_:node1chi8o4qax615 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "CJ" .

<http://telegraphis.net/data/countries/KY#KY> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Cayman Islands"@en ;
	gn:population "44270" ;
	owl:sameAs <http://dbpedia.org/resource/Cayman_Islands> , <http://sws.geonames.org/3580718/> , <http://www.geonames.org/countries/#KY> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Cayman_Islands> .

<http://telegraphis.net/data/countries/KZ#KZ> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/KZ/Astana#Astana> ;
	geographis:currency <http://telegraphis.net/data/currencies/KZT#KZT> ;
	geographis:isoAlpha2 "KZ" ;
	geographis:isoAlpha3 "KAZ" ;
	geographis:isoNumeric "398" ;
	geographis:isoShortName "KAZAKHSTAN"@fr , "KAZAKHSTAN"@en ;
	geographis:landArea _:node1chi8o4qax616 .

_:node1chi8o4qax616 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "2717300.0" .

<http://telegraphis.net/data/countries/KZ#KZ> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax617 .

_:node1chi8o4qax617 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "KZ" .

<http://telegraphis.net/data/countries/KZ#KZ> code:hasCode _:node1chi8o4qax618 .

_:node1chi8o4qax618 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "KAZ" .

<http://telegraphis.net/data/countries/KZ#KZ> code:hasCode _:node1chi8o4qax619 .

_:node1chi8o4qax619 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "398" .

<http://telegraphis.net/data/countries/KZ#KZ> code:hasCode _:node1chi8o4qax620 .

_:node1chi8o4qax620 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "KZ" .

<http://telegraphis.net/data/countries/KZ#KZ> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Kazakhstan"@en ;
	gn:population "15340000" ;
	owl:sameAs <http://dbpedia.org/resource/Kazakhstan> , <http://sws.geonames.org/1522867/> , <http://www.geonames.org/countries/#KZ> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Kazakhstan> .

<http://telegraphis.net/data/countries/LA#LA> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/LA/Vientiane#Vientiane> ;
	geographis:currency <http://telegraphis.net/data/currencies/LAK#LAK> ;
	geographis:isoAlpha2 "LA" ;
	geographis:isoAlpha3 "LAO" ;
	geographis:isoNumeric "418" ;
	geographis:isoShortName "LAO PEOPLE'S DEMOCRATIC REPUBLIC"@en , "LAO, RÉPUBLIQUE DÉMOCRATIQUE POPULAIRE"@fr ;
	geographis:landArea _:node1chi8o4qax621 .

_:node1chi8o4qax621 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "236800.0" .

<http://telegraphis.net/data/countries/LA#LA> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax622 .

_:node1chi8o4qax622 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "LA" .

<http://telegraphis.net/data/countries/LA#LA> code:hasCode _:node1chi8o4qax623 .

_:node1chi8o4qax623 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "LAO" .

<http://telegraphis.net/data/countries/LA#LA> code:hasCode _:node1chi8o4qax624 .

_:node1chi8o4qax624 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "418" .

<http://telegraphis.net/data/countries/LA#LA> code:hasCode _:node1chi8o4qax625 .

_:node1chi8o4qax625 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "LA" .

<http://telegraphis.net/data/countries/LA#LA> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Laos"@en ;
	gn:population "6677000" ;
	owl:sameAs <http://dbpedia.org/resource/Laos> , <http://sws.geonames.org/1655842/> , <http://www.geonames.org/countries/#LA> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Laos> .

<http://telegraphis.net/data/countries/LB#LB> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/LB/Beirut#Beirut> ;
	geographis:currency <http://telegraphis.net/data/currencies/LBP#LBP> ;
	geographis:isoAlpha2 "LB" ;
	geographis:isoAlpha3 "LBN" ;
	geographis:isoNumeric "422" ;
	geographis:isoShortName "LEBANON"@en , "LIBAN"@fr ;
	geographis:landArea _:node1chi8o4qax626 .

_:node1chi8o4qax626 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "10400.0" .

<http://telegraphis.net/data/countries/LB#LB> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax627 .

_:node1chi8o4qax627 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "LB" .

<http://telegraphis.net/data/countries/LB#LB> code:hasCode _:node1chi8o4qax628 .

_:node1chi8o4qax628 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "LBN" .

<http://telegraphis.net/data/countries/LB#LB> code:hasCode _:node1chi8o4qax629 .

_:node1chi8o4qax629 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "422" .

<http://telegraphis.net/data/countries/LB#LB> code:hasCode _:node1chi8o4qax630 .

_:node1chi8o4qax630 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "LE" .

<http://telegraphis.net/data/countries/LB#LB> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Lebanon"@en ;
	gn:population "3971000" ;
	owl:sameAs <http://dbpedia.org/resource/Lebanon> , <http://sws.geonames.org/272103/> , <http://www.geonames.org/countries/#LB> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Lebanon> .

<http://telegraphis.net/data/countries/LC#LC> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/LC/Castries#Castries> ;
	geographis:currency <http://telegraphis.net/data/currencies/XCD#XCD> ;
	geographis:isoAlpha2 "LC" ;
	geographis:isoAlpha3 "LCA" ;
	geographis:isoNumeric "662" ;
	geographis:isoShortName "SAINT LUCIA"@en , "SAINTE-LUCIE"@fr ;
	geographis:landArea _:node1chi8o4qax631 .

_:node1chi8o4qax631 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "616.0" .

<http://telegraphis.net/data/countries/LC#LC> geographis:onContinent <http://telegraphis.net/data/continents/NA#NA> ;
	code:hasCode _:node1chi8o4qax632 .

_:node1chi8o4qax632 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "LC" .

<http://telegraphis.net/data/countries/LC#LC> code:hasCode _:node1chi8o4qax633 .

_:node1chi8o4qax633 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "LCA" .

<http://telegraphis.net/data/countries/LC#LC> code:hasCode _:node1chi8o4qax634 .

_:node1chi8o4qax634 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "662" .

<http://telegraphis.net/data/countries/LC#LC> code:hasCode _:node1chi8o4qax635 .

_:node1chi8o4qax635 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "ST" .

<http://telegraphis.net/data/countries/LC#LC> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Saint Lucia"@en ;
	gn:population "172000" ;
	owl:sameAs <http://dbpedia.org/resource/Saint_Lucia> , <http://sws.geonames.org/3576468/> , <http://www.geonames.org/countries/#LC> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Saint_Lucia> .

<http://telegraphis.net/data/countries/LI#LI> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/LI/Vaduz#Vaduz> ;
	geographis:currency <http://telegraphis.net/data/currencies/CHF#CHF> ;
	geographis:isoAlpha2 "LI" ;
	geographis:isoAlpha3 "LIE" ;
	geographis:isoNumeric "438" ;
	geographis:isoShortName "LIECHTENSTEIN"@fr , "LIECHTENSTEIN"@en ;
	geographis:landArea _:node1chi8o4qax636 .

_:node1chi8o4qax636 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "160.0" .

<http://telegraphis.net/data/countries/LI#LI> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax637 .

_:node1chi8o4qax637 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "LI" .

<http://telegraphis.net/data/countries/LI#LI> code:hasCode _:node1chi8o4qax638 .

_:node1chi8o4qax638 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "LIE" .

<http://telegraphis.net/data/countries/LI#LI> code:hasCode _:node1chi8o4qax639 .

_:node1chi8o4qax639 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "438" .

<http://telegraphis.net/data/countries/LI#LI> code:hasCode _:node1chi8o4qax640 .

_:node1chi8o4qax640 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "LS" .

<http://telegraphis.net/data/countries/LI#LI> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Liechtenstein"@en ;
	gn:population "34000" ;
	owl:sameAs <http://dbpedia.org/resource/Liechtenstein> , <http://sws.geonames.org/3042058/> , <http://www.geonames.org/countries/#LI> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Liechtenstein> .

<http://telegraphis.net/data/countries/LK#LK> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/LK/Colombo#Colombo> ;
	geographis:currency <http://telegraphis.net/data/currencies/LKR#LKR> ;
	geographis:isoAlpha2 "LK" ;
	geographis:isoAlpha3 "LKA" ;
	geographis:isoNumeric "144" ;
	geographis:isoShortName "SRI LANKA"@fr , "SRI LANKA"@en ;
	geographis:landArea _:node1chi8o4qax641 .

_:node1chi8o4qax641 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "65610.0" .

<http://telegraphis.net/data/countries/LK#LK> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax642 .

_:node1chi8o4qax642 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "LK" .

<http://telegraphis.net/data/countries/LK#LK> code:hasCode _:node1chi8o4qax643 .

_:node1chi8o4qax643 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "LKA" .

<http://telegraphis.net/data/countries/LK#LK> code:hasCode _:node1chi8o4qax644 .

_:node1chi8o4qax644 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "144" .

<http://telegraphis.net/data/countries/LK#LK> code:hasCode _:node1chi8o4qax645 .

_:node1chi8o4qax645 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "CE" .

<http://telegraphis.net/data/countries/LK#LK> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Sri Lanka"@en ;
	gn:population "21128000" ;
	owl:sameAs <http://dbpedia.org/resource/Sri_Lanka> , <http://sws.geonames.org/1227603/> , <http://www.geonames.org/countries/#LK> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Sri_Lanka> .

<http://telegraphis.net/data/countries/LR#LR> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/LR/Monrovia#Monrovia> ;
	geographis:currency <http://telegraphis.net/data/currencies/LRD#LRD> ;
	geographis:isoAlpha2 "LR" ;
	geographis:isoAlpha3 "LBR" ;
	geographis:isoNumeric "430" ;
	geographis:isoShortName "LIBERIA"@en , "LIBÉRIA"@fr ;
	geographis:landArea _:node1chi8o4qax646 .

_:node1chi8o4qax646 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "111370.0" .

<http://telegraphis.net/data/countries/LR#LR> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax647 .

_:node1chi8o4qax647 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "LR" .

<http://telegraphis.net/data/countries/LR#LR> code:hasCode _:node1chi8o4qax648 .

_:node1chi8o4qax648 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "LBR" .

<http://telegraphis.net/data/countries/LR#LR> code:hasCode _:node1chi8o4qax649 .

_:node1chi8o4qax649 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "430" .

<http://telegraphis.net/data/countries/LR#LR> code:hasCode _:node1chi8o4qax650 .

_:node1chi8o4qax650 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "LI" .

<http://telegraphis.net/data/countries/LR#LR> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Liberia"@en ;
	gn:population "3334000" ;
	owl:sameAs <http://dbpedia.org/resource/Liberia> , <http://sws.geonames.org/2275384/> , <http://www.geonames.org/countries/#LR> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Liberia> .

<http://telegraphis.net/data/countries/LS#LS> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/LS/Maseru#Maseru> ;
	geographis:currency <http://telegraphis.net/data/currencies/LSL#LSL> ;
	geographis:isoAlpha2 "LS" ;
	geographis:isoAlpha3 "LSO" ;
	geographis:isoNumeric "426" ;
	geographis:isoShortName "LESOTHO"@fr , "LESOTHO"@en ;
	geographis:landArea _:node1chi8o4qax651 .

_:node1chi8o4qax651 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "30355.0" .

<http://telegraphis.net/data/countries/LS#LS> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax652 .

_:node1chi8o4qax652 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "LS" .

<http://telegraphis.net/data/countries/LS#LS> code:hasCode _:node1chi8o4qax653 .

_:node1chi8o4qax653 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "LSO" .

<http://telegraphis.net/data/countries/LS#LS> code:hasCode _:node1chi8o4qax654 .

_:node1chi8o4qax654 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "426" .

<http://telegraphis.net/data/countries/LS#LS> code:hasCode _:node1chi8o4qax655 .

_:node1chi8o4qax655 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "LT" .

<http://telegraphis.net/data/countries/LS#LS> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Lesotho"@en ;
	gn:population "2128000" ;
	owl:sameAs <http://dbpedia.org/resource/Lesotho> , <http://sws.geonames.org/932692/> , <http://www.geonames.org/countries/#LS> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Lesotho> .

<http://telegraphis.net/data/countries/LT#LT> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/LT/Vilnius#Vilnius> ;
	geographis:currency <http://telegraphis.net/data/currencies/LTL#LTL> ;
	geographis:isoAlpha2 "LT" ;
	geographis:isoAlpha3 "LTU" ;
	geographis:isoNumeric "440" ;
	geographis:isoShortName "LITHUANIA"@en , "LITUANIE"@fr ;
	geographis:landArea _:node1chi8o4qax656 .

_:node1chi8o4qax656 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "65200.0" .

<http://telegraphis.net/data/countries/LT#LT> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax657 .

_:node1chi8o4qax657 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "LT" .

<http://telegraphis.net/data/countries/LT#LT> code:hasCode _:node1chi8o4qax658 .

_:node1chi8o4qax658 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "LTU" .

<http://telegraphis.net/data/countries/LT#LT> code:hasCode _:node1chi8o4qax659 .

_:node1chi8o4qax659 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "440" .

<http://telegraphis.net/data/countries/LT#LT> code:hasCode _:node1chi8o4qax660 .

_:node1chi8o4qax660 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "LH" .

<http://telegraphis.net/data/countries/LT#LT> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Lithuania"@en ;
	gn:population "3565000" ;
	owl:sameAs <http://dbpedia.org/resource/Lithuania> , <http://sws.geonames.org/597427/> , <http://www.geonames.org/countries/#LT> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Lithuania> .

<http://telegraphis.net/data/countries/LU#LU> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/LU/Luxembourg#Luxembourg> ;
	geographis:currency <http://telegraphis.net/data/currencies/EUR#EUR> ;
	geographis:isoAlpha2 "LU" ;
	geographis:isoAlpha3 "LUX" ;
	geographis:isoNumeric "442" ;
	geographis:isoShortName "LUXEMBOURG"@fr , "LUXEMBOURG"@en ;
	geographis:landArea _:node1chi8o4qax661 .

_:node1chi8o4qax661 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "2586.0" .

<http://telegraphis.net/data/countries/LU#LU> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax662 .

_:node1chi8o4qax662 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "LU" .

<http://telegraphis.net/data/countries/LU#LU> code:hasCode _:node1chi8o4qax663 .

_:node1chi8o4qax663 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "LUX" .

<http://telegraphis.net/data/countries/LU#LU> code:hasCode _:node1chi8o4qax664 .

_:node1chi8o4qax664 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "442" .

<http://telegraphis.net/data/countries/LU#LU> code:hasCode _:node1chi8o4qax665 .

_:node1chi8o4qax665 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "LU" .

<http://telegraphis.net/data/countries/LU#LU> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Luxembourg"@en ;
	gn:population "486000" ;
	owl:sameAs <http://dbpedia.org/resource/Luxembourg> , <http://sws.geonames.org/2960313/> , <http://www.geonames.org/countries/#LU> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Luxembourg> .

<http://telegraphis.net/data/countries/LV#LV> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/LV/Riga#Riga> ;
	geographis:currency <http://telegraphis.net/data/currencies/LVL#LVL> ;
	geographis:isoAlpha2 "LV" ;
	geographis:isoAlpha3 "LVA" ;
	geographis:isoNumeric "428" ;
	geographis:isoShortName "LATVIA"@en , "LETTONIE"@fr ;
	geographis:landArea _:node1chi8o4qax666 .

_:node1chi8o4qax666 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "64589.0" .

<http://telegraphis.net/data/countries/LV#LV> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax667 .

_:node1chi8o4qax667 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "LV" .

<http://telegraphis.net/data/countries/LV#LV> code:hasCode _:node1chi8o4qax668 .

_:node1chi8o4qax668 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "LVA" .

<http://telegraphis.net/data/countries/LV#LV> code:hasCode _:node1chi8o4qax669 .

_:node1chi8o4qax669 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "428" .

<http://telegraphis.net/data/countries/LV#LV> code:hasCode _:node1chi8o4qax670 .

_:node1chi8o4qax670 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "LG" .

<http://telegraphis.net/data/countries/LV#LV> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Latvia"@en ;
	gn:population "2245000" ;
	owl:sameAs <http://dbpedia.org/resource/Latvia> , <http://sws.geonames.org/458258/> , <http://www.geonames.org/countries/#LV> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Latvia> .

<http://telegraphis.net/data/countries/LY#LY> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/LY/Tripolis#Tripolis> ;
	geographis:currency <http://telegraphis.net/data/currencies/LYD#LYD> ;
	geographis:isoAlpha2 "LY" ;
	geographis:isoAlpha3 "LBY" ;
	geographis:isoNumeric "434" ;
	geographis:isoShortName "LIBYAN ARAB JAMAHIRIYA"@en , "LIBYENNE, JAMAHIRIYA ARABE"@fr ;
	geographis:landArea _:node1chi8o4qax671 .

_:node1chi8o4qax671 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "1759540.0" .

<http://telegraphis.net/data/countries/LY#LY> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax672 .

_:node1chi8o4qax672 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "LY" .

<http://telegraphis.net/data/countries/LY#LY> code:hasCode _:node1chi8o4qax673 .

_:node1chi8o4qax673 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "LBY" .

<http://telegraphis.net/data/countries/LY#LY> code:hasCode _:node1chi8o4qax674 .

_:node1chi8o4qax674 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "434" .

<http://telegraphis.net/data/countries/LY#LY> code:hasCode _:node1chi8o4qax675 .

_:node1chi8o4qax675 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "LY" .

<http://telegraphis.net/data/countries/LY#LY> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Libya"@en ;
	gn:population "6173000" ;
	owl:sameAs <http://dbpedia.org/resource/Libya> , <http://sws.geonames.org/2215636/> , <http://www.geonames.org/countries/#LY> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Libya> .

<http://telegraphis.net/data/countries/MA#MA> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/MA/Rabat#Rabat> ;
	geographis:currency <http://telegraphis.net/data/currencies/MAD#MAD> ;
	geographis:isoAlpha2 "MA" ;
	geographis:isoAlpha3 "MAR" ;
	geographis:isoNumeric "504" ;
	geographis:isoShortName "MAROC"@fr , "MOROCCO"@en ;
	geographis:landArea _:node1chi8o4qax676 .

_:node1chi8o4qax676 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "446550.0" .

<http://telegraphis.net/data/countries/MA#MA> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax677 .

_:node1chi8o4qax677 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "MA" .

<http://telegraphis.net/data/countries/MA#MA> code:hasCode _:node1chi8o4qax678 .

_:node1chi8o4qax678 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "MAR" .

<http://telegraphis.net/data/countries/MA#MA> code:hasCode _:node1chi8o4qax679 .

_:node1chi8o4qax679 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "504" .

<http://telegraphis.net/data/countries/MA#MA> code:hasCode _:node1chi8o4qax680 .

_:node1chi8o4qax680 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "MO" .

<http://telegraphis.net/data/countries/MA#MA> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Morocco"@en ;
	gn:population "34272000" ;
	owl:sameAs <http://dbpedia.org/resource/Morocco> , <http://sws.geonames.org/2542007/> , <http://www.geonames.org/countries/#MA> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Morocco> .

<http://telegraphis.net/data/countries/MC#MC> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/MC/Monaco#Monaco> ;
	geographis:currency <http://telegraphis.net/data/currencies/EUR#EUR> ;
	geographis:isoAlpha2 "MC" ;
	geographis:isoAlpha3 "MCO" ;
	geographis:isoNumeric "492" ;
	geographis:isoShortName "MONACO"@fr , "MONACO"@en ;
	geographis:landArea _:node1chi8o4qax681 .

_:node1chi8o4qax681 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "2.0" .

<http://telegraphis.net/data/countries/MC#MC> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax682 .

_:node1chi8o4qax682 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "MC" .

<http://telegraphis.net/data/countries/MC#MC> code:hasCode _:node1chi8o4qax683 .

_:node1chi8o4qax683 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "MCO" .

<http://telegraphis.net/data/countries/MC#MC> code:hasCode _:node1chi8o4qax684 .

_:node1chi8o4qax684 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "492" .

<http://telegraphis.net/data/countries/MC#MC> code:hasCode _:node1chi8o4qax685 .

_:node1chi8o4qax685 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "MN" .

<http://telegraphis.net/data/countries/MC#MC> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Monaco"@en ;
	gn:population "32000" ;
	owl:sameAs <http://dbpedia.org/resource/Monaco> , <http://sws.geonames.org/2993457/> , <http://www.geonames.org/countries/#MC> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Monaco> .

<http://telegraphis.net/data/countries/MD#MD> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/MD/Chi%C5%9Fin%C4%83u#Chi%C5%9Fin%C4%83u> ;
	geographis:currency <http://telegraphis.net/data/currencies/MDL#MDL> ;
	geographis:isoAlpha2 "MD" ;
	geographis:isoAlpha3 "MDA" ;
	geographis:isoNumeric "498" ;
	geographis:isoShortName "MOLDOVA, REPUBLIC OF"@en , "MOLDOVA, RÉPUBLIQUE DE"@fr ;
	geographis:landArea _:node1chi8o4qax686 .

_:node1chi8o4qax686 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "33843.0" .

<http://telegraphis.net/data/countries/MD#MD> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax687 .

_:node1chi8o4qax687 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "MD" .

<http://telegraphis.net/data/countries/MD#MD> code:hasCode _:node1chi8o4qax688 .

_:node1chi8o4qax688 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "MDA" .

<http://telegraphis.net/data/countries/MD#MD> code:hasCode _:node1chi8o4qax689 .

_:node1chi8o4qax689 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "498" .

<http://telegraphis.net/data/countries/MD#MD> code:hasCode _:node1chi8o4qax690 .

_:node1chi8o4qax690 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "MD" .

<http://telegraphis.net/data/countries/MD#MD> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Moldova"@en ;
	gn:population "4324000" ;
	owl:sameAs <http://dbpedia.org/resource/Moldova> , <http://sws.geonames.org/617790/> , <http://www.geonames.org/countries/#MD> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Moldova> .

<http://telegraphis.net/data/countries/ME#ME> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/ME/Podgorica#Podgorica> ;
	geographis:currency <http://telegraphis.net/data/currencies/EUR#EUR> ;
	geographis:isoAlpha2 "ME" ;
	geographis:isoAlpha3 "MNE" ;
	geographis:isoNumeric "499" ;
	geographis:isoShortName "MONTENEGRO"@en , "MONTÉNÉGRO"@fr ;
	geographis:landArea _:node1chi8o4qax691 .

_:node1chi8o4qax691 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "14026.0" .

<http://telegraphis.net/data/countries/ME#ME> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax692 .

_:node1chi8o4qax692 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "ME" .

<http://telegraphis.net/data/countries/ME#ME> code:hasCode _:node1chi8o4qax693 .

_:node1chi8o4qax693 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "MNE" .

<http://telegraphis.net/data/countries/ME#ME> code:hasCode _:node1chi8o4qax694 .

_:node1chi8o4qax694 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "499" .

<http://telegraphis.net/data/countries/ME#ME> code:hasCode _:node1chi8o4qax695 .

_:node1chi8o4qax695 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "MJ" .

<http://telegraphis.net/data/countries/ME#ME> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Montenegro"@en ;
	gn:population "678000" ;
	owl:sameAs <http://dbpedia.org/resource/Montenegro> , <http://sws.geonames.org/3194884/> , <http://www.geonames.org/countries/#ME> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Montenegro> .

<http://telegraphis.net/data/countries/MF#MF> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/MF/Marigot#Marigot> ;
	geographis:isoAlpha2 "MF" ;
	geographis:isoAlpha3 "MAF" ;
	geographis:isoNumeric "663" ;
	geographis:isoShortName "SAINT MARTIN"@en , "SAINT-MARTIN"@fr ;
	geographis:landArea _:node1chi8o4qax696 .

_:node1chi8o4qax696 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "53.0" .

<http://telegraphis.net/data/countries/MF#MF> geographis:onContinent <http://telegraphis.net/data/continents/NA#NA> ;
	code:hasCode _:node1chi8o4qax697 .

_:node1chi8o4qax697 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "MF" .

<http://telegraphis.net/data/countries/MF#MF> code:hasCode _:node1chi8o4qax698 .

_:node1chi8o4qax698 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "MAF" .

<http://telegraphis.net/data/countries/MF#MF> code:hasCode _:node1chi8o4qax699 .

_:node1chi8o4qax699 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "663" .

<http://telegraphis.net/data/countries/MF#MF> code:hasCode _:node1chi8o4qax700 .

_:node1chi8o4qax700 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "RN" .

<http://telegraphis.net/data/countries/MF#MF> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Saint Martin"@en ;
	gn:population "33100" ;
	owl:sameAs <http://dbpedia.org/resource/Saint_Martin_%28France%29> , <http://sws.geonames.org/3578421/> , <http://www.geonames.org/countries/#MF> .

<http://telegraphis.net/data/countries/MG#MG> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/MG/Antananarivo#Antananarivo> ;
	geographis:currency <http://telegraphis.net/data/currencies/MGA#MGA> ;
	geographis:isoAlpha2 "MG" ;
	geographis:isoAlpha3 "MDG" ;
	geographis:isoNumeric "450" ;
	geographis:isoShortName "MADAGASCAR"@fr , "MADAGASCAR"@en ;
	geographis:landArea _:node1chi8o4qax701 .

_:node1chi8o4qax701 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "587040.0" .

<http://telegraphis.net/data/countries/MG#MG> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax702 .

_:node1chi8o4qax702 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "MG" .

<http://telegraphis.net/data/countries/MG#MG> code:hasCode _:node1chi8o4qax703 .

_:node1chi8o4qax703 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "MDG" .

<http://telegraphis.net/data/countries/MG#MG> code:hasCode _:node1chi8o4qax704 .

_:node1chi8o4qax704 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "450" .

<http://telegraphis.net/data/countries/MG#MG> code:hasCode _:node1chi8o4qax705 .

_:node1chi8o4qax705 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "MA" .

<http://telegraphis.net/data/countries/MG#MG> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Madagascar"@en ;
	gn:population "20042000" ;
	owl:sameAs <http://dbpedia.org/resource/Madagascar> , <http://sws.geonames.org/1062947/> , <http://www.geonames.org/countries/#MG> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Madagascar> .

<http://telegraphis.net/data/countries/MH#MH> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/MH/Uliga#Uliga> ;
	geographis:currency <http://telegraphis.net/data/currencies/USD#USD> ;
	geographis:isoAlpha2 "MH" ;
	geographis:isoAlpha3 "MHL" ;
	geographis:isoNumeric "584" ;
	geographis:isoShortName "MARSHALL ISLANDS"@en , "MARSHALL, ÎLES"@fr ;
	geographis:landArea _:node1chi8o4qax706 .

_:node1chi8o4qax706 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "181.3" .

<http://telegraphis.net/data/countries/MH#MH> geographis:onContinent <http://telegraphis.net/data/continents/OC#OC> ;
	code:hasCode _:node1chi8o4qax707 .

_:node1chi8o4qax707 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "MH" .

<http://telegraphis.net/data/countries/MH#MH> code:hasCode _:node1chi8o4qax708 .

_:node1chi8o4qax708 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "MHL" .

<http://telegraphis.net/data/countries/MH#MH> code:hasCode _:node1chi8o4qax709 .

_:node1chi8o4qax709 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "584" .

<http://telegraphis.net/data/countries/MH#MH> code:hasCode _:node1chi8o4qax710 .

_:node1chi8o4qax710 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "RM" .

<http://telegraphis.net/data/countries/MH#MH> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Marshall Islands"@en ;
	gn:population "11628" ;
	owl:sameAs <http://dbpedia.org/resource/Marshall_Islands> , <http://sws.geonames.org/2080185/> , <http://www.geonames.org/countries/#MH> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Marshall_Islands> .

<http://telegraphis.net/data/countries/MK#MK> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/MK/Skopje#Skopje> ;
	geographis:currency <http://telegraphis.net/data/currencies/MKD#MKD> ;
	geographis:isoAlpha2 "MK" ;
	geographis:isoAlpha3 "MKD" ;
	geographis:isoNumeric "807" ;
	geographis:isoShortName "MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF"@en , "MACÉDOINE, L'EX-RÉPUBLIQUE YOUGOSLAVE DE"@fr ;
	geographis:landArea _:node1chi8o4qax711 .

_:node1chi8o4qax711 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "25333.0" .

<http://telegraphis.net/data/countries/MK#MK> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax712 .

_:node1chi8o4qax712 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "MK" .

<http://telegraphis.net/data/countries/MK#MK> code:hasCode _:node1chi8o4qax713 .

_:node1chi8o4qax713 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "MKD" .

<http://telegraphis.net/data/countries/MK#MK> code:hasCode _:node1chi8o4qax714 .

_:node1chi8o4qax714 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "807" .

<http://telegraphis.net/data/countries/MK#MK> code:hasCode _:node1chi8o4qax715 .

_:node1chi8o4qax715 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "MK" .

<http://telegraphis.net/data/countries/MK#MK> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Macedonia"@en ;
	gn:population "2061000" ;
	owl:sameAs <http://dbpedia.org/resource/Macedonia> , <http://sws.geonames.org/718075/> , <http://www.geonames.org/countries/#MK> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Macedonia> .

<http://telegraphis.net/data/countries/ML#ML> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/ML/Bamako#Bamako> ;
	geographis:currency <http://telegraphis.net/data/currencies/XOF#XOF> ;
	geographis:isoAlpha2 "ML" ;
	geographis:isoAlpha3 "MLI" ;
	geographis:isoNumeric "466" ;
	geographis:isoShortName "MALI"@fr , "MALI"@en ;
	geographis:landArea _:node1chi8o4qax716 .

_:node1chi8o4qax716 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "1240000.0" .

<http://telegraphis.net/data/countries/ML#ML> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax717 .

_:node1chi8o4qax717 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "ML" .

<http://telegraphis.net/data/countries/ML#ML> code:hasCode _:node1chi8o4qax718 .

_:node1chi8o4qax718 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "MLI" .

<http://telegraphis.net/data/countries/ML#ML> code:hasCode _:node1chi8o4qax719 .

_:node1chi8o4qax719 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "466" .

<http://telegraphis.net/data/countries/ML#ML> code:hasCode _:node1chi8o4qax720 .

_:node1chi8o4qax720 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "ML" .

<http://telegraphis.net/data/countries/ML#ML> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Mali"@en ;
	gn:population "12324000" ;
	owl:sameAs <http://dbpedia.org/resource/Mali> , <http://sws.geonames.org/2453866/> , <http://www.geonames.org/countries/#ML> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Mali> .

<http://telegraphis.net/data/countries/MM#MM> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/MM/Naypyidaw#Naypyidaw> ;
	geographis:currency <http://telegraphis.net/data/currencies/MMK#MMK> ;
	geographis:isoAlpha2 "MM" ;
	geographis:isoAlpha3 "MMR" ;
	geographis:isoNumeric "104" ;
	geographis:isoShortName "MYANMAR"@fr , "MYANMAR"@en ;
	geographis:landArea _:node1chi8o4qax721 .

_:node1chi8o4qax721 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "678500.0" .

<http://telegraphis.net/data/countries/MM#MM> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax722 .

_:node1chi8o4qax722 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "MM" .

<http://telegraphis.net/data/countries/MM#MM> code:hasCode _:node1chi8o4qax723 .

_:node1chi8o4qax723 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "MMR" .

<http://telegraphis.net/data/countries/MM#MM> code:hasCode _:node1chi8o4qax724 .

_:node1chi8o4qax724 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "104" .

<http://telegraphis.net/data/countries/MM#MM> code:hasCode _:node1chi8o4qax725 .

_:node1chi8o4qax725 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "BM" .

<http://telegraphis.net/data/countries/MM#MM> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Myanmar"@en ;
	gn:population "47758000" ;
	owl:sameAs <http://dbpedia.org/resource/Burma> , <http://sws.geonames.org/1327865/> , <http://www.geonames.org/countries/#MM> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Burma> .

<http://telegraphis.net/data/countries/MN#MN> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/MN/Ulan_Bator#UlanBator> ;
	geographis:currency <http://telegraphis.net/data/currencies/MNT#MNT> ;
	geographis:isoAlpha2 "MN" ;
	geographis:isoAlpha3 "MNG" ;
	geographis:isoNumeric "496" ;
	geographis:isoShortName "MONGOLIA"@en , "MONGOLIE"@fr ;
	geographis:landArea _:node1chi8o4qax726 .

_:node1chi8o4qax726 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "1565000.0" .

<http://telegraphis.net/data/countries/MN#MN> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax727 .

_:node1chi8o4qax727 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "MN" .

<http://telegraphis.net/data/countries/MN#MN> code:hasCode _:node1chi8o4qax728 .

_:node1chi8o4qax728 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "MNG" .

<http://telegraphis.net/data/countries/MN#MN> code:hasCode _:node1chi8o4qax729 .

_:node1chi8o4qax729 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "496" .

<http://telegraphis.net/data/countries/MN#MN> code:hasCode _:node1chi8o4qax730 .

_:node1chi8o4qax730 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "MG" .

<http://telegraphis.net/data/countries/MN#MN> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Mongolia"@en ;
	gn:population "2996000" ;
	owl:sameAs <http://dbpedia.org/resource/Mongolia> , <http://sws.geonames.org/2029969/> , <http://www.geonames.org/countries/#MN> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Mongolia> .

<http://telegraphis.net/data/countries/MO#MO> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/MO/Macao#Macao> ;
	geographis:currency <http://telegraphis.net/data/currencies/MOP#MOP> ;
	geographis:isoAlpha2 "MO" ;
	geographis:isoAlpha3 "MAC" ;
	geographis:isoNumeric "446" ;
	geographis:isoShortName "MACAO"@fr , "MACAO"@en ;
	geographis:landArea _:node1chi8o4qax731 .

_:node1chi8o4qax731 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "254.0" .

<http://telegraphis.net/data/countries/MO#MO> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax732 .

_:node1chi8o4qax732 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "MO" .

<http://telegraphis.net/data/countries/MO#MO> code:hasCode _:node1chi8o4qax733 .

_:node1chi8o4qax733 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "MAC" .

<http://telegraphis.net/data/countries/MO#MO> code:hasCode _:node1chi8o4qax734 .

_:node1chi8o4qax734 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "446" .

<http://telegraphis.net/data/countries/MO#MO> code:hasCode _:node1chi8o4qax735 .

_:node1chi8o4qax735 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "MC" .

<http://telegraphis.net/data/countries/MO#MO> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Macao"@en ;
	gn:population "449198" ;
	owl:sameAs <http://dbpedia.org/resource/Macau> , <http://sws.geonames.org/1821275/> , <http://www.geonames.org/countries/#MO> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Macau> .

<http://telegraphis.net/data/countries/MP#MP> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/MP/Saipan#Saipan> ;
	geographis:currency <http://telegraphis.net/data/currencies/USD#USD> ;
	geographis:isoAlpha2 "MP" ;
	geographis:isoAlpha3 "MNP" ;
	geographis:isoNumeric "580" ;
	geographis:isoShortName "MARIANNES DU NORD, ÎLES"@fr , "NORTHERN MARIANA ISLANDS"@en ;
	geographis:landArea _:node1chi8o4qax736 .

_:node1chi8o4qax736 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "477.0" .

<http://telegraphis.net/data/countries/MP#MP> geographis:onContinent <http://telegraphis.net/data/continents/OC#OC> ;
	code:hasCode _:node1chi8o4qax737 .

_:node1chi8o4qax737 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "MP" .

<http://telegraphis.net/data/countries/MP#MP> code:hasCode _:node1chi8o4qax738 .

_:node1chi8o4qax738 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "MNP" .

<http://telegraphis.net/data/countries/MP#MP> code:hasCode _:node1chi8o4qax739 .

_:node1chi8o4qax739 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "580" .

<http://telegraphis.net/data/countries/MP#MP> code:hasCode _:node1chi8o4qax740 .

_:node1chi8o4qax740 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "CQ" .

<http://telegraphis.net/data/countries/MP#MP> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Northern Mariana Islands"@en ;
	gn:population "80362" ;
	owl:sameAs <http://dbpedia.org/resource/Northern_Mariana_Islands> , <http://sws.geonames.org/4041467/> , <http://www.geonames.org/countries/#MP> .

<http://telegraphis.net/data/countries/MQ#MQ> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/MQ/Fort-de-France#FortdeFrance> ;
	geographis:isoAlpha2 "MQ" ;
	geographis:isoAlpha3 "MTQ" ;
	geographis:isoNumeric "474" ;
	geographis:isoShortName "MARTINIQUE"@fr , "MARTINIQUE"@en ;
	geographis:landArea _:node1chi8o4qax741 .

_:node1chi8o4qax741 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "1100.0" .

<http://telegraphis.net/data/countries/MQ#MQ> geographis:onContinent <http://telegraphis.net/data/continents/NA#NA> ;
	code:hasCode _:node1chi8o4qax742 .

_:node1chi8o4qax742 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "MQ" .

<http://telegraphis.net/data/countries/MQ#MQ> code:hasCode _:node1chi8o4qax743 .

_:node1chi8o4qax743 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "MTQ" .

<http://telegraphis.net/data/countries/MQ#MQ> code:hasCode _:node1chi8o4qax744 .

_:node1chi8o4qax744 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "474" .

<http://telegraphis.net/data/countries/MQ#MQ> code:hasCode _:node1chi8o4qax745 .

_:node1chi8o4qax745 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "MB" .

<http://telegraphis.net/data/countries/MQ#MQ> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Martinique"@en ;
	gn:population "432900" ;
	owl:sameAs <http://dbpedia.org/resource/Martinique> , <http://sws.geonames.org/3570311/> , <http://www.geonames.org/countries/#MQ> .

<http://telegraphis.net/data/countries/MR#MR> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/MR/Nouakchott#Nouakchott> ;
	geographis:currency <http://telegraphis.net/data/currencies/MRO#MRO> ;
	geographis:isoAlpha2 "MR" ;
	geographis:isoAlpha3 "MRT" ;
	geographis:isoNumeric "478" ;
	geographis:isoShortName "MAURITANIA"@en , "MAURITANIE"@fr ;
	geographis:landArea _:node1chi8o4qax746 .

_:node1chi8o4qax746 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "1030700.0" .

<http://telegraphis.net/data/countries/MR#MR> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax747 .

_:node1chi8o4qax747 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "MR" .

<http://telegraphis.net/data/countries/MR#MR> code:hasCode _:node1chi8o4qax748 .

_:node1chi8o4qax748 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "MRT" .

<http://telegraphis.net/data/countries/MR#MR> code:hasCode _:node1chi8o4qax749 .

_:node1chi8o4qax749 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "478" .

<http://telegraphis.net/data/countries/MR#MR> code:hasCode _:node1chi8o4qax750 .

_:node1chi8o4qax750 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "MR" .

<http://telegraphis.net/data/countries/MR#MR> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Mauritania"@en ;
	gn:population "3364000" ;
	owl:sameAs <http://dbpedia.org/resource/Mauritania> , <http://sws.geonames.org/2378080/> , <http://www.geonames.org/countries/#MR> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Mauritania> .

<http://telegraphis.net/data/countries/MS#MS> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/MS/Plymouth#Plymouth> ;
	geographis:currency <http://telegraphis.net/data/currencies/XCD#XCD> ;
	geographis:isoAlpha2 "MS" ;
	geographis:isoAlpha3 "MSR" ;
	geographis:isoNumeric "500" ;
	geographis:isoShortName "MONTSERRAT"@fr , "MONTSERRAT"@en ;
	geographis:landArea _:node1chi8o4qax751 .

_:node1chi8o4qax751 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "102.0" .

<http://telegraphis.net/data/countries/MS#MS> geographis:onContinent <http://telegraphis.net/data/continents/NA#NA> ;
	code:hasCode _:node1chi8o4qax752 .

_:node1chi8o4qax752 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "MS" .

<http://telegraphis.net/data/countries/MS#MS> code:hasCode _:node1chi8o4qax753 .

_:node1chi8o4qax753 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "MSR" .

<http://telegraphis.net/data/countries/MS#MS> code:hasCode _:node1chi8o4qax754 .

_:node1chi8o4qax754 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "500" .

<http://telegraphis.net/data/countries/MS#MS> code:hasCode _:node1chi8o4qax755 .

_:node1chi8o4qax755 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "MH" .

<http://telegraphis.net/data/countries/MS#MS> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Montserrat"@en ;
	gn:population "9341" ;
	owl:sameAs <http://dbpedia.org/resource/Montserrat> , <http://sws.geonames.org/3578097/> , <http://www.geonames.org/countries/#MS> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Montserrat> .

<http://telegraphis.net/data/countries/MT#MT> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/MT/Valletta#Valletta> ;
	geographis:currency <http://telegraphis.net/data/currencies/EUR#EUR> ;
	geographis:isoAlpha2 "MT" ;
	geographis:isoAlpha3 "MLT" ;
	geographis:isoNumeric "470" ;
	geographis:isoShortName "MALTA"@en , "MALTE"@fr ;
	geographis:landArea _:node1chi8o4qax756 .

_:node1chi8o4qax756 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "316.0" .

<http://telegraphis.net/data/countries/MT#MT> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax757 .

_:node1chi8o4qax757 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "MT" .

<http://telegraphis.net/data/countries/MT#MT> code:hasCode _:node1chi8o4qax758 .

_:node1chi8o4qax758 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "MLT" .

<http://telegraphis.net/data/countries/MT#MT> code:hasCode _:node1chi8o4qax759 .

_:node1chi8o4qax759 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "470" .

<http://telegraphis.net/data/countries/MT#MT> code:hasCode _:node1chi8o4qax760 .

_:node1chi8o4qax760 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "MT" .

<http://telegraphis.net/data/countries/MT#MT> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Malta"@en ;
	gn:population "403000" ;
	owl:sameAs <http://dbpedia.org/resource/Malta> , <http://sws.geonames.org/2562770/> , <http://www.geonames.org/countries/#MT> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Malta> .

<http://telegraphis.net/data/countries/MU#MU> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/MU/Port_Louis#PortLouis> ;
	geographis:currency <http://telegraphis.net/data/currencies/MUR#MUR> ;
	geographis:isoAlpha2 "MU" ;
	geographis:isoAlpha3 "MUS" ;
	geographis:isoNumeric "480" ;
	geographis:isoShortName "MAURICE"@fr , "MAURITIUS"@en ;
	geographis:landArea _:node1chi8o4qax761 .

_:node1chi8o4qax761 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "2040.0" .

<http://telegraphis.net/data/countries/MU#MU> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax762 .

_:node1chi8o4qax762 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "MU" .

<http://telegraphis.net/data/countries/MU#MU> code:hasCode _:node1chi8o4qax763 .

_:node1chi8o4qax763 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "MUS" .

<http://telegraphis.net/data/countries/MU#MU> code:hasCode _:node1chi8o4qax764 .

_:node1chi8o4qax764 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "480" .

<http://telegraphis.net/data/countries/MU#MU> code:hasCode _:node1chi8o4qax765 .

_:node1chi8o4qax765 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "MP" .

<http://telegraphis.net/data/countries/MU#MU> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Mauritius"@en ;
	gn:population "1260000" ;
	owl:sameAs <http://dbpedia.org/resource/Mauritius> , <http://sws.geonames.org/934292/> , <http://www.geonames.org/countries/#MU> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Mauritius> .

<http://telegraphis.net/data/countries/MV#MV> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/MV/Mal%C3%A9#Mal%C3%A9> ;
	geographis:currency <http://telegraphis.net/data/currencies/MVR#MVR> ;
	geographis:isoAlpha2 "MV" ;
	geographis:isoAlpha3 "MDV" ;
	geographis:isoNumeric "462" ;
	geographis:isoShortName "MALDIVES"@fr , "MALDIVES"@en ;
	geographis:landArea _:node1chi8o4qax766 .

_:node1chi8o4qax766 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "300.0" .

<http://telegraphis.net/data/countries/MV#MV> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax767 .

_:node1chi8o4qax767 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "MV" .

<http://telegraphis.net/data/countries/MV#MV> code:hasCode _:node1chi8o4qax768 .

_:node1chi8o4qax768 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "MDV" .

<http://telegraphis.net/data/countries/MV#MV> code:hasCode _:node1chi8o4qax769 .

_:node1chi8o4qax769 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "462" .

<http://telegraphis.net/data/countries/MV#MV> code:hasCode _:node1chi8o4qax770 .

_:node1chi8o4qax770 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "MV" .

<http://telegraphis.net/data/countries/MV#MV> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Maldives"@en ;
	gn:population "379000" ;
	owl:sameAs <http://dbpedia.org/resource/Maldives> , <http://sws.geonames.org/1282028/> , <http://www.geonames.org/countries/#MV> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Maldives> .

<http://telegraphis.net/data/countries/MW#MW> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/MW/Lilongwe#Lilongwe> ;
	geographis:currency <http://telegraphis.net/data/currencies/MWK#MWK> ;
	geographis:isoAlpha2 "MW" ;
	geographis:isoAlpha3 "MWI" ;
	geographis:isoNumeric "454" ;
	geographis:isoShortName "MALAWI"@fr , "MALAWI"@en ;
	geographis:landArea _:node1chi8o4qax771 .

_:node1chi8o4qax771 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "118480.0" .

<http://telegraphis.net/data/countries/MW#MW> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax772 .

_:node1chi8o4qax772 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "MW" .

<http://telegraphis.net/data/countries/MW#MW> code:hasCode _:node1chi8o4qax773 .

_:node1chi8o4qax773 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "MWI" .

<http://telegraphis.net/data/countries/MW#MW> code:hasCode _:node1chi8o4qax774 .

_:node1chi8o4qax774 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "454" .

<http://telegraphis.net/data/countries/MW#MW> code:hasCode _:node1chi8o4qax775 .

_:node1chi8o4qax775 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "MI" .

<http://telegraphis.net/data/countries/MW#MW> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Malawi"@en ;
	gn:population "13931000" ;
	owl:sameAs <http://dbpedia.org/resource/Malawi> , <http://sws.geonames.org/927384/> , <http://www.geonames.org/countries/#MW> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Malawi> .

<http://telegraphis.net/data/countries/MX#MX> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/MX/Mexico_City#MexicoCity> ;
	geographis:currency <http://telegraphis.net/data/currencies/MXN#MXN> , <http://telegraphis.net/data/currencies/MXV#MXV> ;
	geographis:isoAlpha2 "MX" ;
	geographis:isoAlpha3 "MEX" ;
	geographis:isoNumeric "484" ;
	geographis:isoShortName "MEXICO"@en , "MEXIQUE"@fr ;
	geographis:landArea _:node1chi8o4qax776 .

_:node1chi8o4qax776 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "1972550.0" .

<http://telegraphis.net/data/countries/MX#MX> geographis:onContinent <http://telegraphis.net/data/continents/NA#NA> ;
	code:hasCode _:node1chi8o4qax777 .

_:node1chi8o4qax777 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "MX" .

<http://telegraphis.net/data/countries/MX#MX> code:hasCode _:node1chi8o4qax778 .

_:node1chi8o4qax778 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "MEX" .

<http://telegraphis.net/data/countries/MX#MX> code:hasCode _:node1chi8o4qax779 .

_:node1chi8o4qax779 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "484" .

<http://telegraphis.net/data/countries/MX#MX> code:hasCode _:node1chi8o4qax780 .

_:node1chi8o4qax780 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "MX" .

<http://telegraphis.net/data/countries/MX#MX> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Mexico"@en ;
	gn:population "109955000" ;
	owl:sameAs <http://dbpedia.org/resource/Mexico> , <http://sws.geonames.org/3996063/> , <http://www.geonames.org/countries/#MX> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Mexico> .

<http://telegraphis.net/data/countries/MY#MY> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/MY/Kuala_Lumpur#KualaLumpur> ;
	geographis:currency <http://telegraphis.net/data/currencies/MYR#MYR> ;
	geographis:isoAlpha2 "MY" ;
	geographis:isoAlpha3 "MYS" ;
	geographis:isoNumeric "458" ;
	geographis:isoShortName "MALAISIE"@fr , "MALAYSIA"@en ;
	geographis:landArea _:node1chi8o4qax781 .

_:node1chi8o4qax781 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "329750.0" .

<http://telegraphis.net/data/countries/MY#MY> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax782 .

_:node1chi8o4qax782 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "MY" .

<http://telegraphis.net/data/countries/MY#MY> code:hasCode _:node1chi8o4qax783 .

_:node1chi8o4qax783 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "MYS" .

<http://telegraphis.net/data/countries/MY#MY> code:hasCode _:node1chi8o4qax784 .

_:node1chi8o4qax784 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "458" .

<http://telegraphis.net/data/countries/MY#MY> code:hasCode _:node1chi8o4qax785 .

_:node1chi8o4qax785 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "MY" .

<http://telegraphis.net/data/countries/MY#MY> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Malaysia"@en ;
	gn:population "25259000" ;
	owl:sameAs <http://dbpedia.org/resource/Malaysia> , <http://sws.geonames.org/1733045/> , <http://www.geonames.org/countries/#MY> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Malaysia> .

<http://telegraphis.net/data/countries/MZ#MZ> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/MZ/Maputo#Maputo> ;
	geographis:currency <http://telegraphis.net/data/currencies/MZN#MZN> ;
	geographis:isoAlpha2 "MZ" ;
	geographis:isoAlpha3 "MOZ" ;
	geographis:isoNumeric "508" ;
	geographis:isoShortName "MOZAMBIQUE"@fr , "MOZAMBIQUE"@en ;
	geographis:landArea _:node1chi8o4qax786 .

_:node1chi8o4qax786 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "801590.0" .

<http://telegraphis.net/data/countries/MZ#MZ> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax787 .

_:node1chi8o4qax787 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "MZ" .

<http://telegraphis.net/data/countries/MZ#MZ> code:hasCode _:node1chi8o4qax788 .

_:node1chi8o4qax788 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "MOZ" .

<http://telegraphis.net/data/countries/MZ#MZ> code:hasCode _:node1chi8o4qax789 .

_:node1chi8o4qax789 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "508" .

<http://telegraphis.net/data/countries/MZ#MZ> code:hasCode _:node1chi8o4qax790 .

_:node1chi8o4qax790 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "MZ" .

<http://telegraphis.net/data/countries/MZ#MZ> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Mozambique"@en ;
	gn:population "21284000" ;
	owl:sameAs <http://dbpedia.org/resource/Mozambique> , <http://sws.geonames.org/1036973/> , <http://www.geonames.org/countries/#MZ> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Mozambique> .

<http://telegraphis.net/data/countries/NA#NA> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/NA/Windhoek#Windhoek> ;
	geographis:currency <http://telegraphis.net/data/currencies/NAD#NAD> ;
	geographis:isoAlpha2 "NA" ;
	geographis:isoAlpha3 "NAM" ;
	geographis:isoNumeric "516" ;
	geographis:isoShortName "NAMIBIA"@en , "NAMIBIE"@fr ;
	geographis:landArea _:node1chi8o4qax791 .

_:node1chi8o4qax791 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "825418.0" .

<http://telegraphis.net/data/countries/NA#NA> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax792 .

_:node1chi8o4qax792 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "NA" .

<http://telegraphis.net/data/countries/NA#NA> code:hasCode _:node1chi8o4qax793 .

_:node1chi8o4qax793 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "NAM" .

<http://telegraphis.net/data/countries/NA#NA> code:hasCode _:node1chi8o4qax794 .

_:node1chi8o4qax794 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "516" .

<http://telegraphis.net/data/countries/NA#NA> code:hasCode _:node1chi8o4qax795 .

_:node1chi8o4qax795 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "WA" .

<http://telegraphis.net/data/countries/NA#NA> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Namibia"@en ;
	gn:population "2063000" ;
	owl:sameAs <http://dbpedia.org/resource/Namibia> , <http://sws.geonames.org/3355338/> , <http://www.geonames.org/countries/#NA> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Namibia> .

<http://telegraphis.net/data/countries/NC#NC> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/NC/Noum%C3%A9a#Noum%C3%A9a> ;
	geographis:currency <http://telegraphis.net/data/currencies/XPF#XPF> ;
	geographis:isoAlpha2 "NC" ;
	geographis:isoAlpha3 "NCL" ;
	geographis:isoNumeric "540" ;
	geographis:isoShortName "NEW CALEDONIA"@en , "NOUVELLE-CALÉDONIE"@fr ;
	geographis:landArea _:node1chi8o4qax796 .

_:node1chi8o4qax796 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "19060.0" .

<http://telegraphis.net/data/countries/NC#NC> geographis:onContinent <http://telegraphis.net/data/continents/OC#OC> ;
	code:hasCode _:node1chi8o4qax797 .

_:node1chi8o4qax797 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "NC" .

<http://telegraphis.net/data/countries/NC#NC> code:hasCode _:node1chi8o4qax798 .

_:node1chi8o4qax798 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "NCL" .

<http://telegraphis.net/data/countries/NC#NC> code:hasCode _:node1chi8o4qax799 .

_:node1chi8o4qax799 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "540" .

<http://telegraphis.net/data/countries/NC#NC> code:hasCode _:node1chi8o4qax800 .

_:node1chi8o4qax800 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "NC" .

<http://telegraphis.net/data/countries/NC#NC> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "New Caledonia"@en ;
	gn:population "216494" ;
	owl:sameAs <http://dbpedia.org/resource/New_Caledonia> , <http://sws.geonames.org/2139685/> , <http://www.geonames.org/countries/#NC> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/New_Caledonia> .

<http://telegraphis.net/data/countries/NE#NE> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/NE/Niamey#Niamey> ;
	geographis:currency <http://telegraphis.net/data/currencies/XOF#XOF> ;
	geographis:isoAlpha2 "NE" ;
	geographis:isoAlpha3 "NER" ;
	geographis:isoNumeric "562" ;
	geographis:isoShortName "NIGER"@fr , "NIGER"@en ;
	geographis:landArea _:node1chi8o4qax801 .

_:node1chi8o4qax801 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "1267000.0" .

<http://telegraphis.net/data/countries/NE#NE> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax802 .

_:node1chi8o4qax802 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "NE" .

<http://telegraphis.net/data/countries/NE#NE> code:hasCode _:node1chi8o4qax803 .

_:node1chi8o4qax803 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "NER" .

<http://telegraphis.net/data/countries/NE#NE> code:hasCode _:node1chi8o4qax804 .

_:node1chi8o4qax804 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "562" .

<http://telegraphis.net/data/countries/NE#NE> code:hasCode _:node1chi8o4qax805 .

_:node1chi8o4qax805 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "NG" .

<http://telegraphis.net/data/countries/NE#NE> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Niger"@en ;
	gn:population "13272000" ;
	owl:sameAs <http://dbpedia.org/resource/Niger> , <http://sws.geonames.org/2440476/> , <http://www.geonames.org/countries/#NE> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Niger> .

<http://telegraphis.net/data/countries/NF#NF> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/NF/Kingston#Kingston> ;
	geographis:currency <http://telegraphis.net/data/currencies/AUD#AUD> ;
	geographis:isoAlpha2 "NF" ;
	geographis:isoAlpha3 "NFK" ;
	geographis:isoNumeric "574" ;
	geographis:isoShortName "NORFOLK ISLAND"@en , "NORFOLK, ÎLE"@fr ;
	geographis:landArea _:node1chi8o4qax806 .

_:node1chi8o4qax806 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "34.6" .

<http://telegraphis.net/data/countries/NF#NF> geographis:onContinent <http://telegraphis.net/data/continents/OC#OC> ;
	code:hasCode _:node1chi8o4qax807 .

_:node1chi8o4qax807 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "NF" .

<http://telegraphis.net/data/countries/NF#NF> code:hasCode _:node1chi8o4qax808 .

_:node1chi8o4qax808 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "NFK" .

<http://telegraphis.net/data/countries/NF#NF> code:hasCode _:node1chi8o4qax809 .

_:node1chi8o4qax809 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "574" .

<http://telegraphis.net/data/countries/NF#NF> code:hasCode _:node1chi8o4qax810 .

_:node1chi8o4qax810 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "NF" .

<http://telegraphis.net/data/countries/NF#NF> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Norfolk Island"@en ;
	gn:population "1828" ;
	owl:sameAs <http://dbpedia.org/resource/Norfolk_Island> , <http://sws.geonames.org/2155115/> , <http://www.geonames.org/countries/#NF> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Norfolk_Island> .

<http://telegraphis.net/data/countries/NG#NG> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/NG/Abuja#Abuja> ;
	geographis:currency <http://telegraphis.net/data/currencies/NGN#NGN> ;
	geographis:isoAlpha2 "NG" ;
	geographis:isoAlpha3 "NGA" ;
	geographis:isoNumeric "566" ;
	geographis:isoShortName "NIGERIA"@en , "NIGÉRIA"@fr ;
	geographis:landArea _:node1chi8o4qax811 .

_:node1chi8o4qax811 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "923768.0" .

<http://telegraphis.net/data/countries/NG#NG> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax812 .

_:node1chi8o4qax812 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "NG" .

<http://telegraphis.net/data/countries/NG#NG> code:hasCode _:node1chi8o4qax813 .

_:node1chi8o4qax813 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "NGA" .

<http://telegraphis.net/data/countries/NG#NG> code:hasCode _:node1chi8o4qax814 .

_:node1chi8o4qax814 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "566" .

<http://telegraphis.net/data/countries/NG#NG> code:hasCode _:node1chi8o4qax815 .

_:node1chi8o4qax815 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "NI" .

<http://telegraphis.net/data/countries/NG#NG> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Nigeria"@en ;
	gn:population "138283000" ;
	owl:sameAs <http://dbpedia.org/resource/Nigeria> , <http://sws.geonames.org/2328926/> , <http://www.geonames.org/countries/#NG> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Nigeria> .

<http://telegraphis.net/data/countries/NI#NI> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/NI/Managua#Managua> ;
	geographis:currency <http://telegraphis.net/data/currencies/NIO#NIO> ;
	geographis:isoAlpha2 "NI" ;
	geographis:isoAlpha3 "NIC" ;
	geographis:isoNumeric "558" ;
	geographis:isoShortName "NICARAGUA"@fr , "NICARAGUA"@en ;
	geographis:landArea _:node1chi8o4qax816 .

_:node1chi8o4qax816 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "129494.0" .

<http://telegraphis.net/data/countries/NI#NI> geographis:onContinent <http://telegraphis.net/data/continents/NA#NA> ;
	code:hasCode _:node1chi8o4qax817 .

_:node1chi8o4qax817 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "NI" .

<http://telegraphis.net/data/countries/NI#NI> code:hasCode _:node1chi8o4qax818 .

_:node1chi8o4qax818 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "NIC" .

<http://telegraphis.net/data/countries/NI#NI> code:hasCode _:node1chi8o4qax819 .

_:node1chi8o4qax819 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "558" .

<http://telegraphis.net/data/countries/NI#NI> code:hasCode _:node1chi8o4qax820 .

_:node1chi8o4qax820 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "NU" .

<http://telegraphis.net/data/countries/NI#NI> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Nicaragua"@en ;
	gn:population "5780000" ;
	owl:sameAs <http://dbpedia.org/resource/Nicaragua> , <http://sws.geonames.org/3617476/> , <http://www.geonames.org/countries/#NI> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Nicaragua> .

<http://telegraphis.net/data/countries/NL#NL> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/NL/Amsterdam#Amsterdam> ;
	geographis:currency <http://telegraphis.net/data/currencies/EUR#EUR> ;
	geographis:isoAlpha2 "NL" ;
	geographis:isoAlpha3 "NLD" ;
	geographis:isoNumeric "528" ;
	geographis:isoShortName "NETHERLANDS"@en , "PAYS-BAS"@fr ;
	geographis:landArea _:node1chi8o4qax821 .

_:node1chi8o4qax821 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "41526.0" .

<http://telegraphis.net/data/countries/NL#NL> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax822 .

_:node1chi8o4qax822 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "NL" .

<http://telegraphis.net/data/countries/NL#NL> code:hasCode _:node1chi8o4qax823 .

_:node1chi8o4qax823 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "NLD" .

<http://telegraphis.net/data/countries/NL#NL> code:hasCode _:node1chi8o4qax824 .

_:node1chi8o4qax824 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "528" .

<http://telegraphis.net/data/countries/NL#NL> code:hasCode _:node1chi8o4qax825 .

_:node1chi8o4qax825 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "NL" .

<http://telegraphis.net/data/countries/NL#NL> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Netherlands"@en ;
	gn:population "16645000" ;
	owl:sameAs <http://dbpedia.org/resource/Netherlands> , <http://sws.geonames.org/2750405/> , <http://www.geonames.org/countries/#NL> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Netherlands> .

<http://telegraphis.net/data/countries/NO#NO> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/NO/Oslo#Oslo> ;
	geographis:currency <http://telegraphis.net/data/currencies/NOK#NOK> ;
	geographis:isoAlpha2 "NO" ;
	geographis:isoAlpha3 "NOR" ;
	geographis:isoNumeric "578" ;
	geographis:isoShortName "NORVÈGE"@fr , "NORWAY"@en ;
	geographis:landArea _:node1chi8o4qax826 .

_:node1chi8o4qax826 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "324220.0" .

<http://telegraphis.net/data/countries/NO#NO> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax827 .

_:node1chi8o4qax827 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "NO" .

<http://telegraphis.net/data/countries/NO#NO> code:hasCode _:node1chi8o4qax828 .

_:node1chi8o4qax828 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "NOR" .

<http://telegraphis.net/data/countries/NO#NO> code:hasCode _:node1chi8o4qax829 .

_:node1chi8o4qax829 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "578" .

<http://telegraphis.net/data/countries/NO#NO> code:hasCode _:node1chi8o4qax830 .

_:node1chi8o4qax830 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "NO" .

<http://telegraphis.net/data/countries/NO#NO> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Norway"@en ;
	gn:population "4644000" ;
	owl:sameAs <http://dbpedia.org/resource/Norway> , <http://sws.geonames.org/3144096/> , <http://www.geonames.org/countries/#NO> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Norway> .

<http://telegraphis.net/data/countries/NP#NP> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/NP/Kathmandu#Kathmandu> ;
	geographis:currency <http://telegraphis.net/data/currencies/NPR#NPR> ;
	geographis:isoAlpha2 "NP" ;
	geographis:isoAlpha3 "NPL" ;
	geographis:isoNumeric "524" ;
	geographis:isoShortName "NEPAL"@en , "NÉPAL"@fr ;
	geographis:landArea _:node1chi8o4qax831 .

_:node1chi8o4qax831 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "140800.0" .

<http://telegraphis.net/data/countries/NP#NP> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax832 .

_:node1chi8o4qax832 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "NP" .

<http://telegraphis.net/data/countries/NP#NP> code:hasCode _:node1chi8o4qax833 .

_:node1chi8o4qax833 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "NPL" .

<http://telegraphis.net/data/countries/NP#NP> code:hasCode _:node1chi8o4qax834 .

_:node1chi8o4qax834 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "524" .

<http://telegraphis.net/data/countries/NP#NP> code:hasCode _:node1chi8o4qax835 .

_:node1chi8o4qax835 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "NP" .

<http://telegraphis.net/data/countries/NP#NP> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Nepal"@en ;
	gn:population "29519000" ;
	owl:sameAs <http://dbpedia.org/resource/Nepal> , <http://sws.geonames.org/1282988/> , <http://www.geonames.org/countries/#NP> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Nepal> .

<http://telegraphis.net/data/countries/NR#NR> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/NR/Yaren#Yaren> ;
	geographis:currency <http://telegraphis.net/data/currencies/AUD#AUD> ;
	geographis:isoAlpha2 "NR" ;
	geographis:isoAlpha3 "NRU" ;
	geographis:isoNumeric "520" ;
	geographis:isoShortName "NAURU"@fr , "NAURU"@en ;
	geographis:landArea _:node1chi8o4qax836 .

_:node1chi8o4qax836 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "21.0" .

<http://telegraphis.net/data/countries/NR#NR> geographis:onContinent <http://telegraphis.net/data/continents/OC#OC> ;
	code:hasCode _:node1chi8o4qax837 .

_:node1chi8o4qax837 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "NR" .

<http://telegraphis.net/data/countries/NR#NR> code:hasCode _:node1chi8o4qax838 .

_:node1chi8o4qax838 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "NRU" .

<http://telegraphis.net/data/countries/NR#NR> code:hasCode _:node1chi8o4qax839 .

_:node1chi8o4qax839 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "520" .

<http://telegraphis.net/data/countries/NR#NR> code:hasCode _:node1chi8o4qax840 .

_:node1chi8o4qax840 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "NR" .

<http://telegraphis.net/data/countries/NR#NR> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Nauru"@en ;
	gn:population "13000" ;
	owl:sameAs <http://dbpedia.org/resource/Nauru> , <http://sws.geonames.org/2110425/> , <http://www.geonames.org/countries/#NR> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Nauru> .

<http://telegraphis.net/data/countries/NU#NU> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/NU/Alofi#Alofi> ;
	geographis:currency <http://telegraphis.net/data/currencies/NZD#NZD> ;
	geographis:isoAlpha2 "NU" ;
	geographis:isoAlpha3 "NIU" ;
	geographis:isoNumeric "570" ;
	geographis:isoShortName "NIUE"@en , "NIUÉ"@fr ;
	geographis:landArea _:node1chi8o4qax841 .

_:node1chi8o4qax841 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "260.0" .

<http://telegraphis.net/data/countries/NU#NU> geographis:onContinent <http://telegraphis.net/data/continents/OC#OC> ;
	code:hasCode _:node1chi8o4qax842 .

_:node1chi8o4qax842 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "NU" .

<http://telegraphis.net/data/countries/NU#NU> code:hasCode _:node1chi8o4qax843 .

_:node1chi8o4qax843 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "NIU" .

<http://telegraphis.net/data/countries/NU#NU> code:hasCode _:node1chi8o4qax844 .

_:node1chi8o4qax844 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "570" .

<http://telegraphis.net/data/countries/NU#NU> code:hasCode _:node1chi8o4qax845 .

_:node1chi8o4qax845 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "NE" .

<http://telegraphis.net/data/countries/NU#NU> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Niue"@en ;
	gn:population "2166" ;
	owl:sameAs <http://dbpedia.org/resource/Niue> , <http://sws.geonames.org/4036232/> , <http://www.geonames.org/countries/#NU> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Niue> .

<http://telegraphis.net/data/countries/NZ#NZ> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/NZ/Wellington#Wellington> ;
	geographis:currency <http://telegraphis.net/data/currencies/NZD#NZD> ;
	geographis:isoAlpha2 "NZ" ;
	geographis:isoAlpha3 "NZL" ;
	geographis:isoNumeric "554" ;
	geographis:isoShortName "NEW ZEALAND"@en , "NOUVELLE-ZÉLANDE"@fr ;
	geographis:landArea _:node1chi8o4qax846 .

_:node1chi8o4qax846 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "268680.0" .

<http://telegraphis.net/data/countries/NZ#NZ> geographis:onContinent <http://telegraphis.net/data/continents/OC#OC> ;
	code:hasCode _:node1chi8o4qax847 .

_:node1chi8o4qax847 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "NZ" .

<http://telegraphis.net/data/countries/NZ#NZ> code:hasCode _:node1chi8o4qax848 .

_:node1chi8o4qax848 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "NZL" .

<http://telegraphis.net/data/countries/NZ#NZ> code:hasCode _:node1chi8o4qax849 .

_:node1chi8o4qax849 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "554" .

<http://telegraphis.net/data/countries/NZ#NZ> code:hasCode _:node1chi8o4qax850 .

_:node1chi8o4qax850 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "NZ" .

<http://telegraphis.net/data/countries/NZ#NZ> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "New Zealand"@en ;
	gn:population "4154000" ;
	owl:sameAs <http://dbpedia.org/resource/New_Zealand> , <http://sws.geonames.org/2186224/> , <http://www.geonames.org/countries/#NZ> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/New_Zealand> .

<http://telegraphis.net/data/countries/OM#OM> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/OM/Muscat#Muscat> ;
	geographis:currency <http://telegraphis.net/data/currencies/OMR#OMR> ;
	geographis:isoAlpha2 "OM" ;
	geographis:isoAlpha3 "OMN" ;
	geographis:isoNumeric "512" ;
	geographis:isoShortName "OMAN"@fr , "OMAN"@en ;
	geographis:landArea _:node1chi8o4qax851 .

_:node1chi8o4qax851 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "212460.0" .

<http://telegraphis.net/data/countries/OM#OM> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax852 .

_:node1chi8o4qax852 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "OM" .

<http://telegraphis.net/data/countries/OM#OM> code:hasCode _:node1chi8o4qax853 .

_:node1chi8o4qax853 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "OMN" .

<http://telegraphis.net/data/countries/OM#OM> code:hasCode _:node1chi8o4qax854 .

_:node1chi8o4qax854 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "512" .

<http://telegraphis.net/data/countries/OM#OM> code:hasCode _:node1chi8o4qax855 .

_:node1chi8o4qax855 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "MU" .

<http://telegraphis.net/data/countries/OM#OM> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Oman"@en ;
	gn:population "3309000" ;
	owl:sameAs <http://dbpedia.org/resource/Oman> , <http://sws.geonames.org/286963/> , <http://www.geonames.org/countries/#OM> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Oman> .

<http://telegraphis.net/data/countries/PA#PA> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/PA/Panama_City#PanamaCity> ;
	geographis:currency <http://telegraphis.net/data/currencies/PAB#PAB> , <http://telegraphis.net/data/currencies/USD#USD> ;
	geographis:isoAlpha2 "PA" ;
	geographis:isoAlpha3 "PAN" ;
	geographis:isoNumeric "591" ;
	geographis:isoShortName "PANAMA"@fr , "PANAMA"@en ;
	geographis:landArea _:node1chi8o4qax856 .

_:node1chi8o4qax856 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "78200.0" .

<http://telegraphis.net/data/countries/PA#PA> geographis:onContinent <http://telegraphis.net/data/continents/NA#NA> ;
	code:hasCode _:node1chi8o4qax857 .

_:node1chi8o4qax857 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "PA" .

<http://telegraphis.net/data/countries/PA#PA> code:hasCode _:node1chi8o4qax858 .

_:node1chi8o4qax858 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "PAN" .

<http://telegraphis.net/data/countries/PA#PA> code:hasCode _:node1chi8o4qax859 .

_:node1chi8o4qax859 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "591" .

<http://telegraphis.net/data/countries/PA#PA> code:hasCode _:node1chi8o4qax860 .

_:node1chi8o4qax860 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "PM" .

<http://telegraphis.net/data/countries/PA#PA> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Panama"@en ;
	gn:population "3292000" ;
	owl:sameAs <http://dbpedia.org/resource/Panama> , <http://sws.geonames.org/3703430/> , <http://www.geonames.org/countries/#PA> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Panama> .

<http://telegraphis.net/data/countries/PE#PE> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/PE/Lima#Lima> ;
	geographis:currency <http://telegraphis.net/data/currencies/PEN#PEN> ;
	geographis:isoAlpha2 "PE" ;
	geographis:isoAlpha3 "PER" ;
	geographis:isoNumeric "604" ;
	geographis:isoShortName "PERU"@en , "PÉROU"@fr ;
	geographis:landArea _:node1chi8o4qax861 .

_:node1chi8o4qax861 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "1285220.0" .

<http://telegraphis.net/data/countries/PE#PE> geographis:onContinent <http://telegraphis.net/data/continents/SA#SA> ;
	code:hasCode _:node1chi8o4qax862 .

_:node1chi8o4qax862 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "PE" .

<http://telegraphis.net/data/countries/PE#PE> code:hasCode _:node1chi8o4qax863 .

_:node1chi8o4qax863 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "PER" .

<http://telegraphis.net/data/countries/PE#PE> code:hasCode _:node1chi8o4qax864 .

_:node1chi8o4qax864 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "604" .

<http://telegraphis.net/data/countries/PE#PE> code:hasCode _:node1chi8o4qax865 .

_:node1chi8o4qax865 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "PE" .

<http://telegraphis.net/data/countries/PE#PE> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Peru"@en ;
	gn:population "29041000" ;
	owl:sameAs <http://dbpedia.org/resource/Peru> , <http://sws.geonames.org/3932488/> , <http://www.geonames.org/countries/#PE> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Peru> .

<http://telegraphis.net/data/countries/PF#PF> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/PF/Papeete#Papeete> ;
	geographis:currency <http://telegraphis.net/data/currencies/XPF#XPF> ;
	geographis:isoAlpha2 "PF" ;
	geographis:isoAlpha3 "PYF" ;
	geographis:isoNumeric "258" ;
	geographis:isoShortName "FRENCH POLYNESIA"@en , "POLYNÉSIE FRANÇAISE"@fr ;
	geographis:landArea _:node1chi8o4qax866 .

_:node1chi8o4qax866 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "4167.0" .

<http://telegraphis.net/data/countries/PF#PF> geographis:onContinent <http://telegraphis.net/data/continents/OC#OC> ;
	code:hasCode _:node1chi8o4qax867 .

_:node1chi8o4qax867 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "PF" .

<http://telegraphis.net/data/countries/PF#PF> code:hasCode _:node1chi8o4qax868 .

_:node1chi8o4qax868 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "PYF" .

<http://telegraphis.net/data/countries/PF#PF> code:hasCode _:node1chi8o4qax869 .

_:node1chi8o4qax869 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "258" .

<http://telegraphis.net/data/countries/PF#PF> code:hasCode _:node1chi8o4qax870 .

_:node1chi8o4qax870 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "FP" .

<http://telegraphis.net/data/countries/PF#PF> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "French Polynesia"@en ;
	gn:population "270485" ;
	owl:sameAs <http://dbpedia.org/resource/French_Polynesia> , <http://sws.geonames.org/4030656/> , <http://www.geonames.org/countries/#PF> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/French_Polynesia> .

<http://telegraphis.net/data/countries/PG#PG> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/PG/Port_Moresby#PortMoresby> ;
	geographis:currency <http://telegraphis.net/data/currencies/PGK#PGK> ;
	geographis:isoAlpha2 "PG" ;
	geographis:isoAlpha3 "PNG" ;
	geographis:isoNumeric "598" ;
	geographis:isoShortName "PAPOUASIE-NOUVELLE-GUINÉE"@fr , "PAPUA NEW GUINEA"@en ;
	geographis:landArea _:node1chi8o4qax871 .

_:node1chi8o4qax871 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "462840.0" .

<http://telegraphis.net/data/countries/PG#PG> geographis:onContinent <http://telegraphis.net/data/continents/OC#OC> ;
	code:hasCode _:node1chi8o4qax872 .

_:node1chi8o4qax872 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "PG" .

<http://telegraphis.net/data/countries/PG#PG> code:hasCode _:node1chi8o4qax873 .

_:node1chi8o4qax873 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "PNG" .

<http://telegraphis.net/data/countries/PG#PG> code:hasCode _:node1chi8o4qax874 .

_:node1chi8o4qax874 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "598" .

<http://telegraphis.net/data/countries/PG#PG> code:hasCode _:node1chi8o4qax875 .

_:node1chi8o4qax875 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "PP" .

<http://telegraphis.net/data/countries/PG#PG> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Papua New Guinea"@en ;
	gn:population "5921000" ;
	owl:sameAs <http://dbpedia.org/resource/Papua_New_Guinea> , <http://sws.geonames.org/2088628/> , <http://www.geonames.org/countries/#PG> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Papua_New_Guinea> .

<http://telegraphis.net/data/countries/PH#PH> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/PH/Manila#Manila> ;
	geographis:currency <http://telegraphis.net/data/currencies/PHP#PHP> ;
	geographis:isoAlpha2 "PH" ;
	geographis:isoAlpha3 "PHL" ;
	geographis:isoNumeric "608" ;
	geographis:isoShortName "PHILIPPINES"@fr , "PHILIPPINES"@en ;
	geographis:landArea _:node1chi8o4qax876 .

_:node1chi8o4qax876 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "300000.0" .

<http://telegraphis.net/data/countries/PH#PH> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax877 .

_:node1chi8o4qax877 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "PH" .

<http://telegraphis.net/data/countries/PH#PH> code:hasCode _:node1chi8o4qax878 .

_:node1chi8o4qax878 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "PHL" .

<http://telegraphis.net/data/countries/PH#PH> code:hasCode _:node1chi8o4qax879 .

_:node1chi8o4qax879 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "608" .

<http://telegraphis.net/data/countries/PH#PH> code:hasCode _:node1chi8o4qax880 .

_:node1chi8o4qax880 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "RP" .

<http://telegraphis.net/data/countries/PH#PH> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Philippines"@en ;
	gn:population "92681000" ;
	owl:sameAs <http://dbpedia.org/resource/Philippines> , <http://sws.geonames.org/1694008/> , <http://www.geonames.org/countries/#PH> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Philippines> .

<http://telegraphis.net/data/countries/PK#PK> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/PK/Islamabad#Islamabad> ;
	geographis:currency <http://telegraphis.net/data/currencies/PKR#PKR> ;
	geographis:isoAlpha2 "PK" ;
	geographis:isoAlpha3 "PAK" ;
	geographis:isoNumeric "586" ;
	geographis:isoShortName "PAKISTAN"@fr , "PAKISTAN"@en ;
	geographis:landArea _:node1chi8o4qax881 .

_:node1chi8o4qax881 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "803940.0" .

<http://telegraphis.net/data/countries/PK#PK> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax882 .

_:node1chi8o4qax882 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "PK" .

<http://telegraphis.net/data/countries/PK#PK> code:hasCode _:node1chi8o4qax883 .

_:node1chi8o4qax883 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "PAK" .

<http://telegraphis.net/data/countries/PK#PK> code:hasCode _:node1chi8o4qax884 .

_:node1chi8o4qax884 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "586" .

<http://telegraphis.net/data/countries/PK#PK> code:hasCode _:node1chi8o4qax885 .

_:node1chi8o4qax885 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "PK" .

<http://telegraphis.net/data/countries/PK#PK> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Pakistan"@en ;
	gn:population "167762000" ;
	owl:sameAs <http://dbpedia.org/resource/Pakistan> , <http://sws.geonames.org/1168579/> , <http://www.geonames.org/countries/#PK> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Pakistan> .

<http://telegraphis.net/data/countries/PL#PL> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/PL/Warsaw#Warsaw> ;
	geographis:currency <http://telegraphis.net/data/currencies/PLN#PLN> ;
	geographis:isoAlpha2 "PL" ;
	geographis:isoAlpha3 "POL" ;
	geographis:isoNumeric "616" ;
	geographis:isoShortName "POLAND"@en , "POLOGNE"@fr ;
	geographis:landArea _:node1chi8o4qax886 .

_:node1chi8o4qax886 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "312685.0" .

<http://telegraphis.net/data/countries/PL#PL> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax887 .

_:node1chi8o4qax887 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "PL" .

<http://telegraphis.net/data/countries/PL#PL> code:hasCode _:node1chi8o4qax888 .

_:node1chi8o4qax888 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "POL" .

<http://telegraphis.net/data/countries/PL#PL> code:hasCode _:node1chi8o4qax889 .

_:node1chi8o4qax889 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "616" .

<http://telegraphis.net/data/countries/PL#PL> code:hasCode _:node1chi8o4qax890 .

_:node1chi8o4qax890 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "PL" .

<http://telegraphis.net/data/countries/PL#PL> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Poland"@en ;
	gn:population "38500000" ;
	owl:sameAs <http://dbpedia.org/resource/Poland> , <http://sws.geonames.org/798544/> , <http://www.geonames.org/countries/#PL> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Poland> .

<http://telegraphis.net/data/countries/PM#PM> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/PM/Saint-Pierre#SaintPierre> ;
	geographis:isoAlpha2 "PM" ;
	geographis:isoAlpha3 "SPM" ;
	geographis:isoNumeric "666" ;
	geographis:isoShortName "SAINT PIERRE AND MIQUELON"@en , "SAINT-PIERRE-ET-MIQUELON"@fr ;
	geographis:landArea _:node1chi8o4qax891 .

_:node1chi8o4qax891 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "242.0" .

<http://telegraphis.net/data/countries/PM#PM> geographis:onContinent <http://telegraphis.net/data/continents/NA#NA> ;
	code:hasCode _:node1chi8o4qax892 .

_:node1chi8o4qax892 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "PM" .

<http://telegraphis.net/data/countries/PM#PM> code:hasCode _:node1chi8o4qax893 .

_:node1chi8o4qax893 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "SPM" .

<http://telegraphis.net/data/countries/PM#PM> code:hasCode _:node1chi8o4qax894 .

_:node1chi8o4qax894 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "666" .

<http://telegraphis.net/data/countries/PM#PM> code:hasCode _:node1chi8o4qax895 .

_:node1chi8o4qax895 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "SB" .

<http://telegraphis.net/data/countries/PM#PM> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Saint Pierre and Miquelon"@en ;
	gn:population "7012" ;
	owl:sameAs <http://dbpedia.org/resource/Saint_Pierre_and_Miquelon> , <http://sws.geonames.org/3424932/> , <http://www.geonames.org/countries/#PM> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Saint_Pierre_and_Miquelon> .

<http://telegraphis.net/data/countries/PN#PN> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/PN/Adamstown#Adamstown> ;
	geographis:currency <http://telegraphis.net/data/currencies/NZD#NZD> ;
	geographis:isoAlpha2 "PN" ;
	geographis:isoAlpha3 "PCN" ;
	geographis:isoNumeric "612" ;
	geographis:isoShortName "PITCAIRN"@fr , "PITCAIRN"@en ;
	geographis:landArea _:node1chi8o4qax896 .

_:node1chi8o4qax896 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "47.0" .

<http://telegraphis.net/data/countries/PN#PN> geographis:onContinent <http://telegraphis.net/data/continents/OC#OC> ;
	code:hasCode _:node1chi8o4qax897 .

_:node1chi8o4qax897 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "PN" .

<http://telegraphis.net/data/countries/PN#PN> code:hasCode _:node1chi8o4qax898 .

_:node1chi8o4qax898 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "PCN" .

<http://telegraphis.net/data/countries/PN#PN> code:hasCode _:node1chi8o4qax899 .

_:node1chi8o4qax899 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "612" .

<http://telegraphis.net/data/countries/PN#PN> code:hasCode _:node1chi8o4qax900 .

_:node1chi8o4qax900 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "PC" .

<http://telegraphis.net/data/countries/PN#PN> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Pitcairn"@en ;
	gn:population "46" ;
	owl:sameAs <http://dbpedia.org/resource/Pitcairn_Islands> , <http://sws.geonames.org/4030699/> , <http://www.geonames.org/countries/#PN> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Pitcairn_Islands> .

<http://telegraphis.net/data/countries/PR#PR> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/PR/San_Juan#SanJuan> ;
	geographis:currency <http://telegraphis.net/data/currencies/USD#USD> ;
	geographis:isoAlpha2 "PR" ;
	geographis:isoAlpha3 "PRI" ;
	geographis:isoNumeric "630" ;
	geographis:isoShortName "PORTO RICO"@fr , "PUERTO RICO"@en ;
	geographis:landArea _:node1chi8o4qax901 .

_:node1chi8o4qax901 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "9104.0" .

<http://telegraphis.net/data/countries/PR#PR> geographis:onContinent <http://telegraphis.net/data/continents/NA#NA> ;
	code:hasCode _:node1chi8o4qax902 .

_:node1chi8o4qax902 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "PR" .

<http://telegraphis.net/data/countries/PR#PR> code:hasCode _:node1chi8o4qax903 .

_:node1chi8o4qax903 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "PRI" .

<http://telegraphis.net/data/countries/PR#PR> code:hasCode _:node1chi8o4qax904 .

_:node1chi8o4qax904 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "630" .

<http://telegraphis.net/data/countries/PR#PR> code:hasCode _:node1chi8o4qax905 .

_:node1chi8o4qax905 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "RQ" .

<http://telegraphis.net/data/countries/PR#PR> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Puerto Rico"@en ;
	gn:population "3916632" ;
	owl:sameAs <http://dbpedia.org/resource/Puerto_Rico> , <http://sws.geonames.org/4566966/> , <http://www.geonames.org/countries/#PR> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Puerto_Rico> .

<http://telegraphis.net/data/countries/PS#PS> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/PS/East_Jerusalem#EastJerusalem> ;
	geographis:isoAlpha2 "PS" ;
	geographis:isoAlpha3 "PSE" ;
	geographis:isoNumeric "275" ;
	geographis:isoShortName "PALESTINIAN TERRITORY, OCCUPIED"@en , "PALESTINIEN OCCUPÉ, TERRITOIRE"@fr ;
	geographis:landArea _:node1chi8o4qax906 .

_:node1chi8o4qax906 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "5970.0" .

<http://telegraphis.net/data/countries/PS#PS> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax907 .

_:node1chi8o4qax907 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "PS" .

<http://telegraphis.net/data/countries/PS#PS> code:hasCode _:node1chi8o4qax908 .

_:node1chi8o4qax908 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "PSE" .

<http://telegraphis.net/data/countries/PS#PS> code:hasCode _:node1chi8o4qax909 .

_:node1chi8o4qax909 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "275" .

<http://telegraphis.net/data/countries/PS#PS> code:hasCode _:node1chi8o4qax910 .

_:node1chi8o4qax910 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "WE" .

<http://telegraphis.net/data/countries/PS#PS> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Palestinian Territory"@en ;
	gn:population "3800000" ;
	owl:sameAs <http://dbpedia.org/resource/Palestinian_territories> , <http://sws.geonames.org/6254930/> , <http://www.geonames.org/countries/#PS> .

<http://telegraphis.net/data/countries/PT#PT> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/PT/Lisbon#Lisbon> ;
	geographis:currency <http://telegraphis.net/data/currencies/EUR#EUR> ;
	geographis:isoAlpha2 "PT" ;
	geographis:isoAlpha3 "PRT" ;
	geographis:isoNumeric "620" ;
	geographis:isoShortName "PORTUGAL"@fr , "PORTUGAL"@en ;
	geographis:landArea _:node1chi8o4qax911 .

_:node1chi8o4qax911 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "92391.0" .

<http://telegraphis.net/data/countries/PT#PT> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax912 .

_:node1chi8o4qax912 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "PT" .

<http://telegraphis.net/data/countries/PT#PT> code:hasCode _:node1chi8o4qax913 .

_:node1chi8o4qax913 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "PRT" .

<http://telegraphis.net/data/countries/PT#PT> code:hasCode _:node1chi8o4qax914 .

_:node1chi8o4qax914 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "620" .

<http://telegraphis.net/data/countries/PT#PT> code:hasCode _:node1chi8o4qax915 .

_:node1chi8o4qax915 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "PO" .

<http://telegraphis.net/data/countries/PT#PT> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Portugal"@en ;
	gn:population "10676000" ;
	owl:sameAs <http://dbpedia.org/resource/Portugal> , <http://sws.geonames.org/2264397/> , <http://www.geonames.org/countries/#PT> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Portugal> .

<http://telegraphis.net/data/countries/PW#PW> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/PW/Melekeok#Melekeok> ;
	geographis:currency <http://telegraphis.net/data/currencies/USD#USD> ;
	geographis:isoAlpha2 "PW" ;
	geographis:isoAlpha3 "PLW" ;
	geographis:isoNumeric "585" ;
	geographis:isoShortName "PALAOS"@fr , "PALAU"@en ;
	geographis:landArea _:node1chi8o4qax916 .

_:node1chi8o4qax916 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "458.0" .

<http://telegraphis.net/data/countries/PW#PW> geographis:onContinent <http://telegraphis.net/data/continents/OC#OC> ;
	code:hasCode _:node1chi8o4qax917 .

_:node1chi8o4qax917 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "PW" .

<http://telegraphis.net/data/countries/PW#PW> code:hasCode _:node1chi8o4qax918 .

_:node1chi8o4qax918 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "PLW" .

<http://telegraphis.net/data/countries/PW#PW> code:hasCode _:node1chi8o4qax919 .

_:node1chi8o4qax919 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "585" .

<http://telegraphis.net/data/countries/PW#PW> code:hasCode _:node1chi8o4qax920 .

_:node1chi8o4qax920 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "PS" .

<http://telegraphis.net/data/countries/PW#PW> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Palau"@en ;
	gn:population "20303" ;
	owl:sameAs <http://dbpedia.org/resource/Palau> , <http://sws.geonames.org/1559582/> , <http://www.geonames.org/countries/#PW> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Palau> .

<http://telegraphis.net/data/countries/PY#PY> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/PY/Asunci%C3%B3n#Asunci%C3%B3n> ;
	geographis:currency <http://telegraphis.net/data/currencies/PYG#PYG> ;
	geographis:isoAlpha2 "PY" ;
	geographis:isoAlpha3 "PRY" ;
	geographis:isoNumeric "600" ;
	geographis:isoShortName "PARAGUAY"@fr , "PARAGUAY"@en ;
	geographis:landArea _:node1chi8o4qax921 .

_:node1chi8o4qax921 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "406750.0" .

<http://telegraphis.net/data/countries/PY#PY> geographis:onContinent <http://telegraphis.net/data/continents/SA#SA> ;
	code:hasCode _:node1chi8o4qax922 .

_:node1chi8o4qax922 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "PY" .

<http://telegraphis.net/data/countries/PY#PY> code:hasCode _:node1chi8o4qax923 .

_:node1chi8o4qax923 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "PRY" .

<http://telegraphis.net/data/countries/PY#PY> code:hasCode _:node1chi8o4qax924 .

_:node1chi8o4qax924 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "600" .

<http://telegraphis.net/data/countries/PY#PY> code:hasCode _:node1chi8o4qax925 .

_:node1chi8o4qax925 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "PA" .

<http://telegraphis.net/data/countries/PY#PY> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Paraguay"@en ;
	gn:population "6831000" ;
	owl:sameAs <http://dbpedia.org/resource/Paraguay> , <http://sws.geonames.org/3437598/> , <http://www.geonames.org/countries/#PY> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Paraguay> .

<http://telegraphis.net/data/countries/QA#QA> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/QA/Doha#Doha> ;
	geographis:currency <http://telegraphis.net/data/currencies/QAR#QAR> ;
	geographis:isoAlpha2 "QA" ;
	geographis:isoAlpha3 "QAT" ;
	geographis:isoNumeric "634" ;
	geographis:isoShortName "QATAR"@fr , "QATAR"@en ;
	geographis:landArea _:node1chi8o4qax926 .

_:node1chi8o4qax926 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "11437.0" .

<http://telegraphis.net/data/countries/QA#QA> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax927 .

_:node1chi8o4qax927 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "QA" .

<http://telegraphis.net/data/countries/QA#QA> code:hasCode _:node1chi8o4qax928 .

_:node1chi8o4qax928 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "QAT" .

<http://telegraphis.net/data/countries/QA#QA> code:hasCode _:node1chi8o4qax929 .

_:node1chi8o4qax929 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "634" .

<http://telegraphis.net/data/countries/QA#QA> code:hasCode _:node1chi8o4qax930 .

_:node1chi8o4qax930 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "QA" .

<http://telegraphis.net/data/countries/QA#QA> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Qatar"@en ;
	gn:population "928000" ;
	owl:sameAs <http://dbpedia.org/resource/Qatar> , <http://sws.geonames.org/289688/> , <http://www.geonames.org/countries/#QA> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Qatar> .

<http://telegraphis.net/data/countries/RE#RE> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/RE/Saint-Denis#SaintDenis> ;
	geographis:isoAlpha2 "RE" ;
	geographis:isoAlpha3 "REU" ;
	geographis:isoNumeric "638" ;
	geographis:isoShortName "RÉUNION"@fr , "RÉUNION"@en ;
	geographis:landArea _:node1chi8o4qax931 .

_:node1chi8o4qax931 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "2517.0" .

<http://telegraphis.net/data/countries/RE#RE> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax932 .

_:node1chi8o4qax932 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "RE" .

<http://telegraphis.net/data/countries/RE#RE> code:hasCode _:node1chi8o4qax933 .

_:node1chi8o4qax933 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "REU" .

<http://telegraphis.net/data/countries/RE#RE> code:hasCode _:node1chi8o4qax934 .

_:node1chi8o4qax934 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "638" .

<http://telegraphis.net/data/countries/RE#RE> code:hasCode _:node1chi8o4qax935 .

_:node1chi8o4qax935 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "RE" .

<http://telegraphis.net/data/countries/RE#RE> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Reunion"@en ;
	gn:population "776948" ;
	owl:sameAs <http://dbpedia.org/resource/R%C3%A9union> , <http://sws.geonames.org/935317/> , <http://www.geonames.org/countries/#RE> .

<http://telegraphis.net/data/countries/RO#RO> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/RO/Bucharest#Bucharest> ;
	geographis:currency <http://telegraphis.net/data/currencies/RON#RON> ;
	geographis:isoAlpha2 "RO" ;
	geographis:isoAlpha3 "ROU" ;
	geographis:isoNumeric "642" ;
	geographis:isoShortName "ROMANIA"@en , "ROUMANIE"@fr ;
	geographis:landArea _:node1chi8o4qax936 .

_:node1chi8o4qax936 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "237500.0" .

<http://telegraphis.net/data/countries/RO#RO> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax937 .

_:node1chi8o4qax937 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "RO" .

<http://telegraphis.net/data/countries/RO#RO> code:hasCode _:node1chi8o4qax938 .

_:node1chi8o4qax938 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "ROU" .

<http://telegraphis.net/data/countries/RO#RO> code:hasCode _:node1chi8o4qax939 .

_:node1chi8o4qax939 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "642" .

<http://telegraphis.net/data/countries/RO#RO> code:hasCode _:node1chi8o4qax940 .

_:node1chi8o4qax940 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "RO" .

<http://telegraphis.net/data/countries/RO#RO> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Romania"@en ;
	gn:population "22246000" ;
	owl:sameAs <http://dbpedia.org/resource/Romania> , <http://sws.geonames.org/798549/> , <http://www.geonames.org/countries/#RO> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Romania> .

<http://telegraphis.net/data/countries/RS#RS> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/RS/Belgrade#Belgrade> ;
	geographis:currency <http://telegraphis.net/data/currencies/RSD#RSD> ;
	geographis:isoAlpha2 "RS" ;
	geographis:isoAlpha3 "SRB" ;
	geographis:isoNumeric "688" ;
	geographis:isoShortName "SERBIA"@en , "SERBIE"@fr ;
	geographis:landArea _:node1chi8o4qax941 .

_:node1chi8o4qax941 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "88361.0" .

<http://telegraphis.net/data/countries/RS#RS> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax942 .

_:node1chi8o4qax942 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "RS" .

<http://telegraphis.net/data/countries/RS#RS> code:hasCode _:node1chi8o4qax943 .

_:node1chi8o4qax943 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "SRB" .

<http://telegraphis.net/data/countries/RS#RS> code:hasCode _:node1chi8o4qax944 .

_:node1chi8o4qax944 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "688" .

<http://telegraphis.net/data/countries/RS#RS> code:hasCode _:node1chi8o4qax945 .

_:node1chi8o4qax945 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "RB" .

<http://telegraphis.net/data/countries/RS#RS> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Serbia"@en ;
	gn:population "10159000" ;
	owl:sameAs <http://dbpedia.org/resource/Serbia> , <http://sws.geonames.org/6290252/> , <http://www.geonames.org/countries/#RS> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Serbia> .

<http://telegraphis.net/data/countries/RU#RU> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/RU/Moscow#Moscow> ;
	geographis:currency <http://telegraphis.net/data/currencies/RUB#RUB> ;
	geographis:isoAlpha2 "RU" ;
	geographis:isoAlpha3 "RUS" ;
	geographis:isoNumeric "643" ;
	geographis:isoShortName "RUSSIAN FEDERATION"@en , "RUSSIE, FÉDÉRATION DE"@fr ;
	geographis:landArea _:node1chi8o4qax946 .

_:node1chi8o4qax946 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "17100000.0" .

<http://telegraphis.net/data/countries/RU#RU> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax947 .

_:node1chi8o4qax947 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "RU" .

<http://telegraphis.net/data/countries/RU#RU> code:hasCode _:node1chi8o4qax948 .

_:node1chi8o4qax948 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "RUS" .

<http://telegraphis.net/data/countries/RU#RU> code:hasCode _:node1chi8o4qax949 .

_:node1chi8o4qax949 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "643" .

<http://telegraphis.net/data/countries/RU#RU> code:hasCode _:node1chi8o4qax950 .

_:node1chi8o4qax950 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "RS" .

<http://telegraphis.net/data/countries/RU#RU> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Russia"@en ;
	gn:population "140702000" ;
	owl:sameAs <http://dbpedia.org/resource/Russia> , <http://sws.geonames.org/2017370/> , <http://www.geonames.org/countries/#RU> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Russia> .

<http://telegraphis.net/data/countries/RW#RW> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/RW/Kigali#Kigali> ;
	geographis:currency <http://telegraphis.net/data/currencies/RWF#RWF> ;
	geographis:isoAlpha2 "RW" ;
	geographis:isoAlpha3 "RWA" ;
	geographis:isoNumeric "646" ;
	geographis:isoShortName "RWANDA"@fr , "RWANDA"@en ;
	geographis:landArea _:node1chi8o4qax951 .

_:node1chi8o4qax951 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "26338.0" .

<http://telegraphis.net/data/countries/RW#RW> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax952 .

_:node1chi8o4qax952 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "RW" .

<http://telegraphis.net/data/countries/RW#RW> code:hasCode _:node1chi8o4qax953 .

_:node1chi8o4qax953 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "RWA" .

<http://telegraphis.net/data/countries/RW#RW> code:hasCode _:node1chi8o4qax954 .

_:node1chi8o4qax954 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "646" .

<http://telegraphis.net/data/countries/RW#RW> code:hasCode _:node1chi8o4qax955 .

_:node1chi8o4qax955 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "RW" .

<http://telegraphis.net/data/countries/RW#RW> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Rwanda"@en ;
	owl:sameAs <http://dbpedia.org/resource/Rwanda> , <http://sws.geonames.org/49518/> , <http://www.geonames.org/countries/#RW> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Rwanda> .

<http://telegraphis.net/data/countries/SA#SA> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/SA/Riyadh#Riyadh> ;
	geographis:currency <http://telegraphis.net/data/currencies/SAR#SAR> ;
	geographis:isoAlpha2 "SA" ;
	geographis:isoAlpha3 "SAU" ;
	geographis:isoNumeric "682" ;
	geographis:isoShortName "ARABIE SAOUDITE"@fr , "SAUDI ARABIA"@en ;
	geographis:landArea _:node1chi8o4qax956 .

_:node1chi8o4qax956 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "1960582.0" .

<http://telegraphis.net/data/countries/SA#SA> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax957 .

_:node1chi8o4qax957 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "SA" .

<http://telegraphis.net/data/countries/SA#SA> code:hasCode _:node1chi8o4qax958 .

_:node1chi8o4qax958 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "SAU" .

<http://telegraphis.net/data/countries/SA#SA> code:hasCode _:node1chi8o4qax959 .

_:node1chi8o4qax959 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "682" .

<http://telegraphis.net/data/countries/SA#SA> code:hasCode _:node1chi8o4qax960 .

_:node1chi8o4qax960 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "SA" .

<http://telegraphis.net/data/countries/SA#SA> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Saudi Arabia"@en ;
	gn:population "28161000" ;
	owl:sameAs <http://dbpedia.org/resource/Saudi_Arabia> , <http://sws.geonames.org/102358/> , <http://www.geonames.org/countries/#SA> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Saudi_Arabia> .

<http://telegraphis.net/data/countries/SB#SB> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/SB/Honiara#Honiara> ;
	geographis:currency <http://telegraphis.net/data/currencies/SBD#SBD> ;
	geographis:isoAlpha2 "SB" ;
	geographis:isoAlpha3 "SLB" ;
	geographis:isoNumeric "090" ;
	geographis:isoShortName "SALOMON, ÎLES"@fr , "SOLOMON ISLANDS"@en ;
	geographis:landArea _:node1chi8o4qax961 .

_:node1chi8o4qax961 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "28450.0" .

<http://telegraphis.net/data/countries/SB#SB> geographis:onContinent <http://telegraphis.net/data/continents/OC#OC> ;
	code:hasCode _:node1chi8o4qax962 .

_:node1chi8o4qax962 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "SB" .

<http://telegraphis.net/data/countries/SB#SB> code:hasCode _:node1chi8o4qax963 .

_:node1chi8o4qax963 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "SLB" .

<http://telegraphis.net/data/countries/SB#SB> code:hasCode _:node1chi8o4qax964 .

_:node1chi8o4qax964 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "090" .

<http://telegraphis.net/data/countries/SB#SB> code:hasCode _:node1chi8o4qax965 .

_:node1chi8o4qax965 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "BP" .

<http://telegraphis.net/data/countries/SB#SB> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Solomon Islands"@en ;
	gn:population "581000" ;
	owl:sameAs <http://dbpedia.org/resource/Solomon_Islands> , <http://sws.geonames.org/2103350/> , <http://www.geonames.org/countries/#SB> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Solomon_Islands> .

<http://telegraphis.net/data/countries/SC#SC> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/SC/Victoria#Victoria> ;
	geographis:currency <http://telegraphis.net/data/currencies/SCR#SCR> ;
	geographis:isoAlpha2 "SC" ;
	geographis:isoAlpha3 "SYC" ;
	geographis:isoNumeric "690" ;
	geographis:isoShortName "SEYCHELLES"@fr , "SEYCHELLES"@en ;
	geographis:landArea _:node1chi8o4qax966 .

_:node1chi8o4qax966 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "455.0" .

<http://telegraphis.net/data/countries/SC#SC> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax967 .

_:node1chi8o4qax967 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "SC" .

<http://telegraphis.net/data/countries/SC#SC> code:hasCode _:node1chi8o4qax968 .

_:node1chi8o4qax968 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "SYC" .

<http://telegraphis.net/data/countries/SC#SC> code:hasCode _:node1chi8o4qax969 .

_:node1chi8o4qax969 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "690" .

<http://telegraphis.net/data/countries/SC#SC> code:hasCode _:node1chi8o4qax970 .

_:node1chi8o4qax970 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "SE" .

<http://telegraphis.net/data/countries/SC#SC> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Seychelles"@en ;
	gn:population "82000" ;
	owl:sameAs <http://dbpedia.org/resource/Seychelles> , <http://sws.geonames.org/241170/> , <http://www.geonames.org/countries/#SC> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Seychelles> .

<http://telegraphis.net/data/countries/SD#SD> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/SD/Khartoum#Khartoum> ;
	geographis:currency <http://telegraphis.net/data/currencies/SDG#SDG> ;
	geographis:isoAlpha2 "SD" ;
	geographis:isoAlpha3 "SDN" ;
	geographis:isoNumeric "736" ;
	geographis:isoShortName "SOUDAN"@fr , "SUDAN"@en ;
	geographis:landArea _:node1chi8o4qax971 .

_:node1chi8o4qax971 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "2505810.0" .

<http://telegraphis.net/data/countries/SD#SD> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax972 .

_:node1chi8o4qax972 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "SD" .

<http://telegraphis.net/data/countries/SD#SD> code:hasCode _:node1chi8o4qax973 .

_:node1chi8o4qax973 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "SDN" .

<http://telegraphis.net/data/countries/SD#SD> code:hasCode _:node1chi8o4qax974 .

_:node1chi8o4qax974 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "736" .

<http://telegraphis.net/data/countries/SD#SD> code:hasCode _:node1chi8o4qax975 .

_:node1chi8o4qax975 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "SU" .

<http://telegraphis.net/data/countries/SD#SD> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Sudan"@en ;
	gn:population "40218000" ;
	owl:sameAs <http://dbpedia.org/resource/Sudan> , <http://sws.geonames.org/366755/> , <http://www.geonames.org/countries/#SD> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Sudan> .

<http://telegraphis.net/data/countries/SE#SE> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/SE/Stockholm#Stockholm> ;
	geographis:currency <http://telegraphis.net/data/currencies/SEK#SEK> ;
	geographis:isoAlpha2 "SE" ;
	geographis:isoAlpha3 "SWE" ;
	geographis:isoNumeric "752" ;
	geographis:isoShortName "SUÈDE"@fr , "SWEDEN"@en ;
	geographis:landArea _:node1chi8o4qax976 .

_:node1chi8o4qax976 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "449964.0" .

<http://telegraphis.net/data/countries/SE#SE> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax977 .

_:node1chi8o4qax977 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "SE" .

<http://telegraphis.net/data/countries/SE#SE> code:hasCode _:node1chi8o4qax978 .

_:node1chi8o4qax978 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "SWE" .

<http://telegraphis.net/data/countries/SE#SE> code:hasCode _:node1chi8o4qax979 .

_:node1chi8o4qax979 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "752" .

<http://telegraphis.net/data/countries/SE#SE> code:hasCode _:node1chi8o4qax980 .

_:node1chi8o4qax980 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "SW" .

<http://telegraphis.net/data/countries/SE#SE> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Sweden"@en ;
	gn:population "9045000" ;
	owl:sameAs <http://dbpedia.org/resource/Sweden> , <http://sws.geonames.org/2661886/> , <http://www.geonames.org/countries/#SE> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Sweden> .

<http://telegraphis.net/data/countries/SG#SG> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/SG/Singapur#Singapur> ;
	geographis:currency <http://telegraphis.net/data/currencies/BND#BND> , <http://telegraphis.net/data/currencies/SGD#SGD> ;
	geographis:isoAlpha2 "SG" ;
	geographis:isoAlpha3 "SGP" ;
	geographis:isoNumeric "702" ;
	geographis:isoShortName "SINGAPORE"@en , "SINGAPOUR"@fr ;
	geographis:landArea _:node1chi8o4qax981 .

_:node1chi8o4qax981 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "692.7" .

<http://telegraphis.net/data/countries/SG#SG> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax982 .

_:node1chi8o4qax982 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "SG" .

<http://telegraphis.net/data/countries/SG#SG> code:hasCode _:node1chi8o4qax983 .

_:node1chi8o4qax983 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "SGP" .

<http://telegraphis.net/data/countries/SG#SG> code:hasCode _:node1chi8o4qax984 .

_:node1chi8o4qax984 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "702" .

<http://telegraphis.net/data/countries/SG#SG> code:hasCode _:node1chi8o4qax985 .

_:node1chi8o4qax985 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "SN" .

<http://telegraphis.net/data/countries/SG#SG> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Singapore"@en ;
	gn:population "4608000" ;
	owl:sameAs <http://dbpedia.org/resource/Singapore> , <http://sws.geonames.org/1880251/> , <http://www.geonames.org/countries/#SG> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Singapore> .

<http://telegraphis.net/data/countries/SH#SH> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/SH/Jamestown#Jamestown> ;
	geographis:currency <http://telegraphis.net/data/currencies/SHP#SHP> ;
	geographis:isoAlpha2 "SH" ;
	geographis:isoAlpha3 "SHN" ;
	geographis:isoNumeric "654" ;
	geographis:isoShortName "SAINT HELENA"@en , "SAINTE-HÉLÈNE"@fr ;
	geographis:landArea _:node1chi8o4qax986 .

_:node1chi8o4qax986 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "410.0" .

<http://telegraphis.net/data/countries/SH#SH> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax987 .

_:node1chi8o4qax987 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "SH" .

<http://telegraphis.net/data/countries/SH#SH> code:hasCode _:node1chi8o4qax988 .

_:node1chi8o4qax988 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "SHN" .

<http://telegraphis.net/data/countries/SH#SH> code:hasCode _:node1chi8o4qax989 .

_:node1chi8o4qax989 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "654" .

<http://telegraphis.net/data/countries/SH#SH> code:hasCode _:node1chi8o4qax990 .

_:node1chi8o4qax990 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "SH" .

<http://telegraphis.net/data/countries/SH#SH> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Saint Helena"@en ;
	gn:population "7460" ;
	owl:sameAs <http://dbpedia.org/resource/Saint_Helena> , <http://sws.geonames.org/3370751/> , <http://www.geonames.org/countries/#SH> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Saint_Helena> .

<http://telegraphis.net/data/countries/SI#SI> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/SI/Ljubljana#Ljubljana> ;
	geographis:currency <http://telegraphis.net/data/currencies/EUR#EUR> ;
	geographis:isoAlpha2 "SI" ;
	geographis:isoAlpha3 "SVN" ;
	geographis:isoNumeric "705" ;
	geographis:isoShortName "SLOVENIA"@en , "SLOVÉNIE"@fr ;
	geographis:landArea _:node1chi8o4qax991 .

_:node1chi8o4qax991 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "20273.0" .

<http://telegraphis.net/data/countries/SI#SI> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax992 .

_:node1chi8o4qax992 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "SI" .

<http://telegraphis.net/data/countries/SI#SI> code:hasCode _:node1chi8o4qax993 .

_:node1chi8o4qax993 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "SVN" .

<http://telegraphis.net/data/countries/SI#SI> code:hasCode _:node1chi8o4qax994 .

_:node1chi8o4qax994 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "705" .

<http://telegraphis.net/data/countries/SI#SI> code:hasCode _:node1chi8o4qax995 .

_:node1chi8o4qax995 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "SI" .

<http://telegraphis.net/data/countries/SI#SI> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Slovenia"@en ;
	gn:population "2007000" ;
	owl:sameAs <http://dbpedia.org/resource/Slovenia> , <http://sws.geonames.org/3190538/> , <http://www.geonames.org/countries/#SI> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Slovenia> .

<http://telegraphis.net/data/countries/SJ#SJ> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/SJ/Longyearbyen#Longyearbyen> ;
	geographis:isoAlpha2 "SJ" ;
	geographis:isoAlpha3 "SJM" ;
	geographis:isoNumeric "744" ;
	geographis:isoShortName "SVALBARD AND JAN MAYEN"@en , "SVALBARD ET ÎLE JAN MAYEN"@fr ;
	geographis:landArea _:node1chi8o4qax996 .

_:node1chi8o4qax996 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "62049.0" .

<http://telegraphis.net/data/countries/SJ#SJ> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax997 .

_:node1chi8o4qax997 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "SV" .

<http://telegraphis.net/data/countries/SJ#SJ> code:hasCode _:node1chi8o4qax998 .

_:node1chi8o4qax998 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "SJ" .

<http://telegraphis.net/data/countries/SJ#SJ> code:hasCode _:node1chi8o4qax999 .

_:node1chi8o4qax999 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "SJM" .

<http://telegraphis.net/data/countries/SJ#SJ> code:hasCode _:node1chi8o4qax1000 .

_:node1chi8o4qax1000 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "744" .

<http://telegraphis.net/data/countries/SJ#SJ> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Svalbard and Jan Mayen"@en ;
	gn:population "2265" ;
	owl:sameAs <http://dbpedia.org/resource/Svalbard_and_Jan_Mayen> , <http://sws.geonames.org/607072/> , <http://www.geonames.org/countries/#SJ> .

<http://telegraphis.net/data/countries/SK#SK> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/SK/Bratislava#Bratislava> ;
	geographis:currency <http://telegraphis.net/data/currencies/EUR#EUR> ;
	geographis:isoAlpha2 "SK" ;
	geographis:isoAlpha3 "SVK" ;
	geographis:isoNumeric "703" ;
	geographis:isoShortName "SLOVAKIA"@en , "SLOVAQUIE"@fr ;
	geographis:landArea _:node1chi8o4qax1001 .

_:node1chi8o4qax1001 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "48845.0" .

<http://telegraphis.net/data/countries/SK#SK> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax1002 .

_:node1chi8o4qax1002 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "SK" .

<http://telegraphis.net/data/countries/SK#SK> code:hasCode _:node1chi8o4qax1003 .

_:node1chi8o4qax1003 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "SVK" .

<http://telegraphis.net/data/countries/SK#SK> code:hasCode _:node1chi8o4qax1004 .

_:node1chi8o4qax1004 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "703" .

<http://telegraphis.net/data/countries/SK#SK> code:hasCode _:node1chi8o4qax1005 .

_:node1chi8o4qax1005 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "LO" .

<http://telegraphis.net/data/countries/SK#SK> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Slovakia"@en ;
	gn:population "5455000" ;
	owl:sameAs <http://dbpedia.org/resource/Slovakia> , <http://sws.geonames.org/3057568/> , <http://www.geonames.org/countries/#SK> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Slovakia> .

<http://telegraphis.net/data/countries/SL#SL> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/SL/Freetown#Freetown> ;
	geographis:currency <http://telegraphis.net/data/currencies/SLL#SLL> ;
	geographis:isoAlpha2 "SL" ;
	geographis:isoAlpha3 "SLE" ;
	geographis:isoNumeric "694" ;
	geographis:isoShortName "SIERRA LEONE"@fr , "SIERRA LEONE"@en ;
	geographis:landArea _:node1chi8o4qax1006 .

_:node1chi8o4qax1006 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "71740.0" .

<http://telegraphis.net/data/countries/SL#SL> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax1007 .

_:node1chi8o4qax1007 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "SL" .

<http://telegraphis.net/data/countries/SL#SL> code:hasCode _:node1chi8o4qax1008 .

_:node1chi8o4qax1008 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "SLE" .

<http://telegraphis.net/data/countries/SL#SL> code:hasCode _:node1chi8o4qax1009 .

_:node1chi8o4qax1009 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "694" .

<http://telegraphis.net/data/countries/SL#SL> code:hasCode _:node1chi8o4qax1010 .

_:node1chi8o4qax1010 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "SL" .

<http://telegraphis.net/data/countries/SL#SL> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Sierra Leone"@en ;
	gn:population "6286000" ;
	owl:sameAs <http://dbpedia.org/resource/Sierra_Leone> , <http://sws.geonames.org/2403846/> , <http://www.geonames.org/countries/#SL> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Sierra_Leone> .

<http://telegraphis.net/data/countries/SM#SM> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/SM/San_Marino#SanMarino> ;
	geographis:currency <http://telegraphis.net/data/currencies/EUR#EUR> ;
	geographis:isoAlpha2 "SM" ;
	geographis:isoAlpha3 "SMR" ;
	geographis:isoNumeric "674" ;
	geographis:isoShortName "SAINT-MARIN"@fr , "SAN MARINO"@en ;
	geographis:landArea _:node1chi8o4qax1011 .

_:node1chi8o4qax1011 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "61.2" .

<http://telegraphis.net/data/countries/SM#SM> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax1012 .

_:node1chi8o4qax1012 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "SM" .

<http://telegraphis.net/data/countries/SM#SM> code:hasCode _:node1chi8o4qax1013 .

_:node1chi8o4qax1013 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "SMR" .

<http://telegraphis.net/data/countries/SM#SM> code:hasCode _:node1chi8o4qax1014 .

_:node1chi8o4qax1014 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "674" .

<http://telegraphis.net/data/countries/SM#SM> code:hasCode _:node1chi8o4qax1015 .

_:node1chi8o4qax1015 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "SM" .

<http://telegraphis.net/data/countries/SM#SM> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "San Marino"@en ;
	gn:population "29000" ;
	owl:sameAs <http://dbpedia.org/resource/San_Marino> , <http://sws.geonames.org/3168068/> , <http://www.geonames.org/countries/#SM> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/San_Marino> .

<http://telegraphis.net/data/countries/SN#SN> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/SN/Dakar#Dakar> ;
	geographis:currency <http://telegraphis.net/data/currencies/XOF#XOF> ;
	geographis:isoAlpha2 "SN" ;
	geographis:isoAlpha3 "SEN" ;
	geographis:isoNumeric "686" ;
	geographis:isoShortName "SENEGAL"@en , "SÉNÉGAL"@fr ;
	geographis:landArea _:node1chi8o4qax1016 .

_:node1chi8o4qax1016 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "196190.0" .

<http://telegraphis.net/data/countries/SN#SN> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax1017 .

_:node1chi8o4qax1017 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "SN" .

<http://telegraphis.net/data/countries/SN#SN> code:hasCode _:node1chi8o4qax1018 .

_:node1chi8o4qax1018 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "SEN" .

<http://telegraphis.net/data/countries/SN#SN> code:hasCode _:node1chi8o4qax1019 .

_:node1chi8o4qax1019 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "686" .

<http://telegraphis.net/data/countries/SN#SN> code:hasCode _:node1chi8o4qax1020 .

_:node1chi8o4qax1020 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "SG" .

<http://telegraphis.net/data/countries/SN#SN> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Senegal"@en ;
	gn:population "12853000" ;
	owl:sameAs <http://dbpedia.org/resource/Senegal> , <http://sws.geonames.org/2245662/> , <http://www.geonames.org/countries/#SN> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Senegal> .

<http://telegraphis.net/data/countries/SO#SO> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/SO/Mogadishu#Mogadishu> ;
	geographis:currency <http://telegraphis.net/data/currencies/SOS#SOS> ;
	geographis:isoAlpha2 "SO" ;
	geographis:isoAlpha3 "SOM" ;
	geographis:isoNumeric "706" ;
	geographis:isoShortName "SOMALIA"@en , "SOMALIE"@fr ;
	geographis:landArea _:node1chi8o4qax1021 .

_:node1chi8o4qax1021 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "637657.0" .

<http://telegraphis.net/data/countries/SO#SO> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax1022 .

_:node1chi8o4qax1022 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "SO" .

<http://telegraphis.net/data/countries/SO#SO> code:hasCode _:node1chi8o4qax1023 .

_:node1chi8o4qax1023 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "SOM" .

<http://telegraphis.net/data/countries/SO#SO> code:hasCode _:node1chi8o4qax1024 .

_:node1chi8o4qax1024 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "706" .

<http://telegraphis.net/data/countries/SO#SO> code:hasCode _:node1chi8o4qax1025 .

_:node1chi8o4qax1025 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "SO" .

<http://telegraphis.net/data/countries/SO#SO> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Somalia"@en ;
	gn:population "9379000" ;
	owl:sameAs <http://dbpedia.org/resource/Somalia> , <http://sws.geonames.org/51537/> , <http://www.geonames.org/countries/#SO> .

<http://telegraphis.net/data/countries/SR#SR> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/SR/Paramaribo#Paramaribo> ;
	geographis:currency <http://telegraphis.net/data/currencies/SRD#SRD> ;
	geographis:isoAlpha2 "SR" ;
	geographis:isoAlpha3 "SUR" ;
	geographis:isoNumeric "740" ;
	geographis:isoShortName "SURINAME"@fr , "SURINAME"@en ;
	geographis:landArea _:node1chi8o4qax1026 .

_:node1chi8o4qax1026 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "163270.0" .

<http://telegraphis.net/data/countries/SR#SR> geographis:onContinent <http://telegraphis.net/data/continents/SA#SA> ;
	code:hasCode _:node1chi8o4qax1027 .

_:node1chi8o4qax1027 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "SR" .

<http://telegraphis.net/data/countries/SR#SR> code:hasCode _:node1chi8o4qax1028 .

_:node1chi8o4qax1028 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "SUR" .

<http://telegraphis.net/data/countries/SR#SR> code:hasCode _:node1chi8o4qax1029 .

_:node1chi8o4qax1029 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "740" .

<http://telegraphis.net/data/countries/SR#SR> code:hasCode _:node1chi8o4qax1030 .

_:node1chi8o4qax1030 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "NS" .

<http://telegraphis.net/data/countries/SR#SR> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Suriname"@en ;
	gn:population "475000" ;
	owl:sameAs <http://dbpedia.org/resource/Suriname> , <http://sws.geonames.org/3382998/> , <http://www.geonames.org/countries/#SR> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Suriname> .

<http://telegraphis.net/data/countries/ST#ST> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/ST/S%C3%A3o_Tom%C3%A9#S%C3%A3oTom%C3%A9> ;
	geographis:currency <http://telegraphis.net/data/currencies/STD#STD> ;
	geographis:isoAlpha2 "ST" ;
	geographis:isoAlpha3 "STP" ;
	geographis:isoNumeric "678" ;
	geographis:isoShortName "SAO TOME AND PRINCIPE"@en , "SAO TOMÉ-ET-PRINCIPE"@fr ;
	geographis:landArea _:node1chi8o4qax1031 .

_:node1chi8o4qax1031 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "1001.0" .

<http://telegraphis.net/data/countries/ST#ST> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax1032 .

_:node1chi8o4qax1032 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "ST" .

<http://telegraphis.net/data/countries/ST#ST> code:hasCode _:node1chi8o4qax1033 .

_:node1chi8o4qax1033 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "STP" .

<http://telegraphis.net/data/countries/ST#ST> code:hasCode _:node1chi8o4qax1034 .

_:node1chi8o4qax1034 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "678" .

<http://telegraphis.net/data/countries/ST#ST> code:hasCode _:node1chi8o4qax1035 .

_:node1chi8o4qax1035 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "TP" .

<http://telegraphis.net/data/countries/ST#ST> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Sao Tome and Principe"@en ;
	gn:population "205000" ;
	owl:sameAs <http://dbpedia.org/resource/S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe> , <http://sws.geonames.org/2410758/> , <http://www.geonames.org/countries/#ST> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Sao_Tome_and_Principe> .

<http://telegraphis.net/data/countries/SV#SV> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/SV/San_Salvador#SanSalvador> ;
	geographis:currency <http://telegraphis.net/data/currencies/USD#USD> ;
	geographis:isoAlpha2 "SV" ;
	geographis:isoAlpha3 "SLV" ;
	geographis:isoNumeric "222" ;
	geographis:isoShortName "EL SALVADOR"@fr , "EL SALVADOR"@en ;
	geographis:landArea _:node1chi8o4qax1036 .

_:node1chi8o4qax1036 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "21040.0" .

<http://telegraphis.net/data/countries/SV#SV> geographis:onContinent <http://telegraphis.net/data/continents/NA#NA> ;
	code:hasCode _:node1chi8o4qax1037 .

_:node1chi8o4qax1037 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "SV" .

<http://telegraphis.net/data/countries/SV#SV> code:hasCode _:node1chi8o4qax1038 .

_:node1chi8o4qax1038 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "SLV" .

<http://telegraphis.net/data/countries/SV#SV> code:hasCode _:node1chi8o4qax1039 .

_:node1chi8o4qax1039 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "222" .

<http://telegraphis.net/data/countries/SV#SV> code:hasCode _:node1chi8o4qax1040 .

_:node1chi8o4qax1040 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "ES" .

<http://telegraphis.net/data/countries/SV#SV> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "El Salvador"@en ;
	gn:population "7066000" ;
	owl:sameAs <http://dbpedia.org/resource/El_Salvador> , <http://sws.geonames.org/3585968/> , <http://www.geonames.org/countries/#SV> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/El_Salvador> .

<http://telegraphis.net/data/countries/SY#SY> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/SY/Damascus#Damascus> ;
	geographis:currency <http://telegraphis.net/data/currencies/SYP#SYP> ;
	geographis:isoAlpha2 "SY" ;
	geographis:isoAlpha3 "SYR" ;
	geographis:isoNumeric "760" ;
	geographis:isoShortName "SYRIAN ARAB REPUBLIC"@en , "SYRIENNE, RÉPUBLIQUE ARABE"@fr ;
	geographis:landArea _:node1chi8o4qax1041 .

_:node1chi8o4qax1041 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "185180.0" .

<http://telegraphis.net/data/countries/SY#SY> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax1042 .

_:node1chi8o4qax1042 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "SY" .

<http://telegraphis.net/data/countries/SY#SY> code:hasCode _:node1chi8o4qax1043 .

_:node1chi8o4qax1043 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "SYR" .

<http://telegraphis.net/data/countries/SY#SY> code:hasCode _:node1chi8o4qax1044 .

_:node1chi8o4qax1044 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "760" .

<http://telegraphis.net/data/countries/SY#SY> code:hasCode _:node1chi8o4qax1045 .

_:node1chi8o4qax1045 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "SY" .

<http://telegraphis.net/data/countries/SY#SY> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Syria"@en ;
	gn:population "19747000" ;
	owl:sameAs <http://dbpedia.org/resource/Syria> , <http://sws.geonames.org/163843/> , <http://www.geonames.org/countries/#SY> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Syria> .

<http://telegraphis.net/data/countries/SZ#SZ> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/SZ/Mbabane#Mbabane> ;
	geographis:currency <http://telegraphis.net/data/currencies/SZL#SZL> ;
	geographis:isoAlpha2 "SZ" ;
	geographis:isoAlpha3 "SWZ" ;
	geographis:isoNumeric "748" ;
	geographis:isoShortName "SWAZILAND"@fr , "SWAZILAND"@en ;
	geographis:landArea _:node1chi8o4qax1046 .

_:node1chi8o4qax1046 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "17363.0" .

<http://telegraphis.net/data/countries/SZ#SZ> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax1047 .

_:node1chi8o4qax1047 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "SZ" .

<http://telegraphis.net/data/countries/SZ#SZ> code:hasCode _:node1chi8o4qax1048 .

_:node1chi8o4qax1048 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "SWZ" .

<http://telegraphis.net/data/countries/SZ#SZ> code:hasCode _:node1chi8o4qax1049 .

_:node1chi8o4qax1049 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "748" .

<http://telegraphis.net/data/countries/SZ#SZ> code:hasCode _:node1chi8o4qax1050 .

_:node1chi8o4qax1050 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "WZ" .

<http://telegraphis.net/data/countries/SZ#SZ> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Swaziland"@en ;
	gn:population "1128000" ;
	owl:sameAs <http://dbpedia.org/resource/Swaziland> , <http://sws.geonames.org/934841/> , <http://www.geonames.org/countries/#SZ> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Swaziland> .

<http://telegraphis.net/data/countries/TC#TC> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/TC/Cockburn_Town#CockburnTown> ;
	geographis:currency <http://telegraphis.net/data/currencies/USD#USD> ;
	geographis:isoAlpha2 "TC" ;
	geographis:isoAlpha3 "TCA" ;
	geographis:isoNumeric "796" ;
	geographis:isoShortName "TURKS AND CAICOS ISLANDS"@en , "TURKS ET CAÏQUES, ÎLES"@fr ;
	geographis:landArea _:node1chi8o4qax1051 .

_:node1chi8o4qax1051 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "430.0" .

<http://telegraphis.net/data/countries/TC#TC> geographis:onContinent <http://telegraphis.net/data/continents/NA#NA> ;
	code:hasCode _:node1chi8o4qax1052 .

_:node1chi8o4qax1052 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "TC" .

<http://telegraphis.net/data/countries/TC#TC> code:hasCode _:node1chi8o4qax1053 .

_:node1chi8o4qax1053 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "TCA" .

<http://telegraphis.net/data/countries/TC#TC> code:hasCode _:node1chi8o4qax1054 .

_:node1chi8o4qax1054 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "796" .

<http://telegraphis.net/data/countries/TC#TC> code:hasCode _:node1chi8o4qax1055 .

_:node1chi8o4qax1055 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "TK" .

<http://telegraphis.net/data/countries/TC#TC> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Turks and Caicos Islands"@en ;
	gn:population "20556" ;
	owl:sameAs <http://dbpedia.org/resource/Turks_and_Caicos_Islands> , <http://sws.geonames.org/3576916/> , <http://www.geonames.org/countries/#TC> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Turks_and_Caicos_Islands> .

<http://telegraphis.net/data/countries/TD#TD> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/TD/N%27Djamena#N%27Djamena> ;
	geographis:currency <http://telegraphis.net/data/currencies/XAF#XAF> ;
	geographis:isoAlpha2 "TD" ;
	geographis:isoAlpha3 "TCD" ;
	geographis:isoNumeric "148" ;
	geographis:isoShortName "CHAD"@en , "TCHAD"@fr ;
	geographis:landArea _:node1chi8o4qax1056 .

_:node1chi8o4qax1056 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "1284000.0" .

<http://telegraphis.net/data/countries/TD#TD> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax1057 .

_:node1chi8o4qax1057 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "TD" .

<http://telegraphis.net/data/countries/TD#TD> code:hasCode _:node1chi8o4qax1058 .

_:node1chi8o4qax1058 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "TCD" .

<http://telegraphis.net/data/countries/TD#TD> code:hasCode _:node1chi8o4qax1059 .

_:node1chi8o4qax1059 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "148" .

<http://telegraphis.net/data/countries/TD#TD> code:hasCode _:node1chi8o4qax1060 .

_:node1chi8o4qax1060 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "CD" .

<http://telegraphis.net/data/countries/TD#TD> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Chad"@en ;
	gn:population "10111000" ;
	owl:sameAs <http://dbpedia.org/resource/Chad> , <http://sws.geonames.org/2434508/> , <http://www.geonames.org/countries/#TD> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Chad> .

<http://telegraphis.net/data/countries/TF#TF> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/TF/Martin-de-Vivi%C3%A8s#MartindeVivi%C3%A8s> ;
	geographis:isoAlpha2 "TF" ;
	geographis:isoAlpha3 "ATF" ;
	geographis:isoNumeric "260" ;
	geographis:isoShortName "FRENCH SOUTHERN TERRITORIES"@en , "TERRES AUSTRALES FRANÇAISES"@fr ;
	geographis:landArea _:node1chi8o4qax1061 .

_:node1chi8o4qax1061 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "7829.0" .

<http://telegraphis.net/data/countries/TF#TF> geographis:onContinent <http://telegraphis.net/data/continents/AN#AN> ;
	code:hasCode _:node1chi8o4qax1062 .

_:node1chi8o4qax1062 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "TF" .

<http://telegraphis.net/data/countries/TF#TF> code:hasCode _:node1chi8o4qax1063 .

_:node1chi8o4qax1063 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "ATF" .

<http://telegraphis.net/data/countries/TF#TF> code:hasCode _:node1chi8o4qax1064 .

_:node1chi8o4qax1064 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "260" .

<http://telegraphis.net/data/countries/TF#TF> code:hasCode _:node1chi8o4qax1065 .

_:node1chi8o4qax1065 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "FS" .

<http://telegraphis.net/data/countries/TF#TF> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "French Southern Territories"@en ;
	gn:population "0" ;
	owl:sameAs <http://dbpedia.org/resource/French_Southern_and_Antarctic_Lands> , <http://sws.geonames.org/1546748/> , <http://www.geonames.org/countries/#TF> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/French_Southern_and_Antarctic_Lands> .

<http://telegraphis.net/data/countries/TG#TG> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/TG/Lom%C3%A9#Lom%C3%A9> ;
	geographis:currency <http://telegraphis.net/data/currencies/XOF#XOF> ;
	geographis:isoAlpha2 "TG" ;
	geographis:isoAlpha3 "TGO" ;
	geographis:isoNumeric "768" ;
	geographis:isoShortName "TOGO"@fr , "TOGO"@en ;
	geographis:landArea _:node1chi8o4qax1066 .

_:node1chi8o4qax1066 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "56785.0" .

<http://telegraphis.net/data/countries/TG#TG> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax1067 .

_:node1chi8o4qax1067 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "TG" .

<http://telegraphis.net/data/countries/TG#TG> code:hasCode _:node1chi8o4qax1068 .

_:node1chi8o4qax1068 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "TGO" .

<http://telegraphis.net/data/countries/TG#TG> code:hasCode _:node1chi8o4qax1069 .

_:node1chi8o4qax1069 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "768" .

<http://telegraphis.net/data/countries/TG#TG> code:hasCode _:node1chi8o4qax1070 .

_:node1chi8o4qax1070 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "TO" .

<http://telegraphis.net/data/countries/TG#TG> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Togo"@en ;
	gn:population "5858000" ;
	owl:sameAs <http://dbpedia.org/resource/Togo> , <http://sws.geonames.org/2363686/> , <http://www.geonames.org/countries/#TG> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Togo> .

<http://telegraphis.net/data/countries/TH#TH> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/TH/Bangkok#Bangkok> ;
	geographis:currency <http://telegraphis.net/data/currencies/THB#THB> ;
	geographis:isoAlpha2 "TH" ;
	geographis:isoAlpha3 "THA" ;
	geographis:isoNumeric "764" ;
	geographis:isoShortName "THAILAND"@en , "THAÏLANDE"@fr ;
	geographis:landArea _:node1chi8o4qax1071 .

_:node1chi8o4qax1071 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "514000.0" .

<http://telegraphis.net/data/countries/TH#TH> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax1072 .

_:node1chi8o4qax1072 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "TH" .

<http://telegraphis.net/data/countries/TH#TH> code:hasCode _:node1chi8o4qax1073 .

_:node1chi8o4qax1073 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "THA" .

<http://telegraphis.net/data/countries/TH#TH> code:hasCode _:node1chi8o4qax1074 .

_:node1chi8o4qax1074 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "764" .

<http://telegraphis.net/data/countries/TH#TH> code:hasCode _:node1chi8o4qax1075 .

_:node1chi8o4qax1075 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "TH" .

<http://telegraphis.net/data/countries/TH#TH> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Thailand"@en ;
	gn:population "65493000" ;
	owl:sameAs <http://dbpedia.org/resource/Thailand> , <http://sws.geonames.org/1605651/> , <http://www.geonames.org/countries/#TH> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Thailand> .

<http://telegraphis.net/data/countries/TJ#TJ> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/TJ/Dushanbe#Dushanbe> ;
	geographis:currency <http://telegraphis.net/data/currencies/TJS#TJS> ;
	geographis:isoAlpha2 "TJ" ;
	geographis:isoAlpha3 "TJK" ;
	geographis:isoNumeric "762" ;
	geographis:isoShortName "TADJIKISTAN"@fr , "TAJIKISTAN"@en ;
	geographis:landArea _:node1chi8o4qax1076 .

_:node1chi8o4qax1076 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "143100.0" .

<http://telegraphis.net/data/countries/TJ#TJ> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax1077 .

_:node1chi8o4qax1077 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "TJ" .

<http://telegraphis.net/data/countries/TJ#TJ> code:hasCode _:node1chi8o4qax1078 .

_:node1chi8o4qax1078 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "TJK" .

<http://telegraphis.net/data/countries/TJ#TJ> code:hasCode _:node1chi8o4qax1079 .

_:node1chi8o4qax1079 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "762" .

<http://telegraphis.net/data/countries/TJ#TJ> code:hasCode _:node1chi8o4qax1080 .

_:node1chi8o4qax1080 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "TI" .

<http://telegraphis.net/data/countries/TJ#TJ> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Tajikistan"@en ;
	gn:population "7211000" ;
	owl:sameAs <http://dbpedia.org/resource/Tajikistan> , <http://sws.geonames.org/1220409/> , <http://www.geonames.org/countries/#TJ> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Tajikistan> .

<http://telegraphis.net/data/countries/TK#TK> a gn:Country ;
	geographis:currency <http://telegraphis.net/data/currencies/NZD#NZD> ;
	geographis:isoAlpha2 "TK" ;
	geographis:isoAlpha3 "TKL" ;
	geographis:isoNumeric "772" ;
	geographis:isoShortName "TOKELAU"@fr , "TOKELAU"@en ;
	geographis:landArea _:node1chi8o4qax1081 .

_:node1chi8o4qax1081 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "10.0" .

<http://telegraphis.net/data/countries/TK#TK> geographis:onContinent <http://telegraphis.net/data/continents/OC#OC> ;
	code:hasCode _:node1chi8o4qax1082 .

_:node1chi8o4qax1082 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "TK" .

<http://telegraphis.net/data/countries/TK#TK> code:hasCode _:node1chi8o4qax1083 .

_:node1chi8o4qax1083 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "TKL" .

<http://telegraphis.net/data/countries/TK#TK> code:hasCode _:node1chi8o4qax1084 .

_:node1chi8o4qax1084 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "772" .

<http://telegraphis.net/data/countries/TK#TK> code:hasCode _:node1chi8o4qax1085 .

_:node1chi8o4qax1085 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "TL" .

<http://telegraphis.net/data/countries/TK#TK> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Tokelau"@en ;
	gn:population "1405" ;
	owl:sameAs <http://dbpedia.org/resource/Tokelau> , <http://sws.geonames.org/4031074/> , <http://www.geonames.org/countries/#TK> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Tokelau> .

<http://telegraphis.net/data/countries/TL#TL> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/TL/Dili#Dili> ;
	geographis:currency <http://telegraphis.net/data/currencies/USD#USD> ;
	geographis:isoAlpha2 "TL" ;
	geographis:isoAlpha3 "TLS" ;
	geographis:isoNumeric "626" ;
	geographis:isoShortName "TIMOR-LESTE"@fr , "TIMOR-LESTE"@en ;
	geographis:landArea _:node1chi8o4qax1086 .

_:node1chi8o4qax1086 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "15007.0" .

<http://telegraphis.net/data/countries/TL#TL> geographis:onContinent <http://telegraphis.net/data/continents/OC#OC> ;
	code:hasCode _:node1chi8o4qax1087 .

_:node1chi8o4qax1087 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "TL" .

<http://telegraphis.net/data/countries/TL#TL> code:hasCode _:node1chi8o4qax1088 .

_:node1chi8o4qax1088 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "TLS" .

<http://telegraphis.net/data/countries/TL#TL> code:hasCode _:node1chi8o4qax1089 .

_:node1chi8o4qax1089 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "626" .

<http://telegraphis.net/data/countries/TL#TL> code:hasCode _:node1chi8o4qax1090 .

_:node1chi8o4qax1090 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "TT" .

<http://telegraphis.net/data/countries/TL#TL> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "East Timor"@en ;
	gn:population "1107000" ;
	owl:sameAs <http://dbpedia.org/resource/East_Timor> , <http://sws.geonames.org/1966436/> , <http://www.geonames.org/countries/#TL> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/East_Timor> .

<http://telegraphis.net/data/countries/TM#TM> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/TM/Ashgabat#Ashgabat> ;
	geographis:currency <http://telegraphis.net/data/currencies/TMT#TMT> ;
	geographis:isoAlpha2 "TM" ;
	geographis:isoAlpha3 "TKM" ;
	geographis:isoNumeric "795" ;
	geographis:isoShortName "TURKMENISTAN"@en , "TURKMÉNISTAN"@fr ;
	geographis:landArea _:node1chi8o4qax1091 .

_:node1chi8o4qax1091 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "488100.0" .

<http://telegraphis.net/data/countries/TM#TM> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax1092 .

_:node1chi8o4qax1092 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "TM" .

<http://telegraphis.net/data/countries/TM#TM> code:hasCode _:node1chi8o4qax1093 .

_:node1chi8o4qax1093 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "TKM" .

<http://telegraphis.net/data/countries/TM#TM> code:hasCode _:node1chi8o4qax1094 .

_:node1chi8o4qax1094 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "795" .

<http://telegraphis.net/data/countries/TM#TM> code:hasCode _:node1chi8o4qax1095 .

_:node1chi8o4qax1095 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "TX" .

<http://telegraphis.net/data/countries/TM#TM> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Turkmenistan"@en ;
	gn:population "5179000" ;
	owl:sameAs <http://dbpedia.org/resource/Turkmenistan> , <http://sws.geonames.org/1218197/> , <http://www.geonames.org/countries/#TM> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Turkmenistan> .

<http://telegraphis.net/data/countries/TN#TN> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/TN/Tunis#Tunis> ;
	geographis:currency <http://telegraphis.net/data/currencies/TND#TND> ;
	geographis:isoAlpha2 "TN" ;
	geographis:isoAlpha3 "TUN" ;
	geographis:isoNumeric "788" ;
	geographis:isoShortName "TUNISIA"@en , "TUNISIE"@fr ;
	geographis:landArea _:node1chi8o4qax1096 .

_:node1chi8o4qax1096 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "163610.0" .

<http://telegraphis.net/data/countries/TN#TN> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax1097 .

_:node1chi8o4qax1097 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "TN" .

<http://telegraphis.net/data/countries/TN#TN> code:hasCode _:node1chi8o4qax1098 .

_:node1chi8o4qax1098 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "TUN" .

<http://telegraphis.net/data/countries/TN#TN> code:hasCode _:node1chi8o4qax1099 .

_:node1chi8o4qax1099 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "788" .

<http://telegraphis.net/data/countries/TN#TN> code:hasCode _:node1chi8o4qax1100 .

_:node1chi8o4qax1100 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "TS" .

<http://telegraphis.net/data/countries/TN#TN> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Tunisia"@en ;
	gn:population "10378000" ;
	owl:sameAs <http://dbpedia.org/resource/Tunisia> , <http://sws.geonames.org/2464461/> , <http://www.geonames.org/countries/#TN> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Tunisia> .

<http://telegraphis.net/data/countries/TO#TO> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/TO/Nuku%27alofa#Nuku%27alofa> ;
	geographis:currency <http://telegraphis.net/data/currencies/TOP#TOP> ;
	geographis:isoAlpha2 "TO" ;
	geographis:isoAlpha3 "TON" ;
	geographis:isoNumeric "776" ;
	geographis:isoShortName "TONGA"@fr , "TONGA"@en ;
	geographis:landArea _:node1chi8o4qax1101 .

_:node1chi8o4qax1101 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "748.0" .

<http://telegraphis.net/data/countries/TO#TO> geographis:onContinent <http://telegraphis.net/data/continents/OC#OC> ;
	code:hasCode _:node1chi8o4qax1102 .

_:node1chi8o4qax1102 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "TO" .

<http://telegraphis.net/data/countries/TO#TO> code:hasCode _:node1chi8o4qax1103 .

_:node1chi8o4qax1103 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "TON" .

<http://telegraphis.net/data/countries/TO#TO> code:hasCode _:node1chi8o4qax1104 .

_:node1chi8o4qax1104 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "776" .

<http://telegraphis.net/data/countries/TO#TO> code:hasCode _:node1chi8o4qax1105 .

_:node1chi8o4qax1105 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "TN" .

<http://telegraphis.net/data/countries/TO#TO> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Tonga"@en ;
	gn:population "118000" ;
	owl:sameAs <http://dbpedia.org/resource/Tonga> , <http://sws.geonames.org/4032283/> , <http://www.geonames.org/countries/#TO> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Tonga> .

<http://telegraphis.net/data/countries/TR#TR> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/TR/Ankara#Ankara> ;
	geographis:currency <http://telegraphis.net/data/currencies/TRY#TRY> ;
	geographis:isoAlpha2 "TR" ;
	geographis:isoAlpha3 "TUR" ;
	geographis:isoNumeric "792" ;
	geographis:isoShortName "TURKEY"@en , "TURQUIE"@fr ;
	geographis:landArea _:node1chi8o4qax1106 .

_:node1chi8o4qax1106 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "780580.0" .

<http://telegraphis.net/data/countries/TR#TR> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax1107 .

_:node1chi8o4qax1107 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "TR" .

<http://telegraphis.net/data/countries/TR#TR> code:hasCode _:node1chi8o4qax1108 .

_:node1chi8o4qax1108 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "TUR" .

<http://telegraphis.net/data/countries/TR#TR> code:hasCode _:node1chi8o4qax1109 .

_:node1chi8o4qax1109 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "792" .

<http://telegraphis.net/data/countries/TR#TR> code:hasCode _:node1chi8o4qax1110 .

_:node1chi8o4qax1110 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "TU" .

<http://telegraphis.net/data/countries/TR#TR> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Turkey"@en ;
	gn:population "71892000" ;
	owl:sameAs <http://dbpedia.org/resource/Turkey> , <http://sws.geonames.org/298795/> , <http://www.geonames.org/countries/#TR> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Turkey> .

<http://telegraphis.net/data/countries/TT#TT> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/TT/Port_of_Spain#PortofSpain> ;
	geographis:currency <http://telegraphis.net/data/currencies/TTD#TTD> ;
	geographis:isoAlpha2 "TT" ;
	geographis:isoAlpha3 "TTO" ;
	geographis:isoNumeric "780" ;
	geographis:isoShortName "TRINIDAD AND TOBAGO"@en , "TRINITÉ-ET-TOBAGO"@fr ;
	geographis:landArea _:node1chi8o4qax1111 .

_:node1chi8o4qax1111 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "5128.0" .

<http://telegraphis.net/data/countries/TT#TT> geographis:onContinent <http://telegraphis.net/data/continents/NA#NA> ;
	code:hasCode _:node1chi8o4qax1112 .

_:node1chi8o4qax1112 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "TT" .

<http://telegraphis.net/data/countries/TT#TT> code:hasCode _:node1chi8o4qax1113 .

_:node1chi8o4qax1113 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "TTO" .

<http://telegraphis.net/data/countries/TT#TT> code:hasCode _:node1chi8o4qax1114 .

_:node1chi8o4qax1114 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "780" .

<http://telegraphis.net/data/countries/TT#TT> code:hasCode _:node1chi8o4qax1115 .

_:node1chi8o4qax1115 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "TD" .

<http://telegraphis.net/data/countries/TT#TT> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Trinidad and Tobago"@en ;
	gn:population "1047000" ;
	owl:sameAs <http://dbpedia.org/resource/Trinidad_and_Tobago> , <http://sws.geonames.org/3573591/> , <http://www.geonames.org/countries/#TT> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Trinidad_and_Tobago> .

<http://telegraphis.net/data/countries/TV#TV> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/TV/Vaiaku#Vaiaku> ;
	geographis:currency <http://telegraphis.net/data/currencies/AUD#AUD> ;
	geographis:isoAlpha2 "TV" ;
	geographis:isoAlpha3 "TUV" ;
	geographis:isoNumeric "798" ;
	geographis:isoShortName "TUVALU"@fr , "TUVALU"@en ;
	geographis:landArea _:node1chi8o4qax1116 .

_:node1chi8o4qax1116 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "26.0" .

<http://telegraphis.net/data/countries/TV#TV> geographis:onContinent <http://telegraphis.net/data/continents/OC#OC> ;
	code:hasCode _:node1chi8o4qax1117 .

_:node1chi8o4qax1117 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "TV" .

<http://telegraphis.net/data/countries/TV#TV> code:hasCode _:node1chi8o4qax1118 .

_:node1chi8o4qax1118 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "TUV" .

<http://telegraphis.net/data/countries/TV#TV> code:hasCode _:node1chi8o4qax1119 .

_:node1chi8o4qax1119 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "798" .

<http://telegraphis.net/data/countries/TV#TV> code:hasCode _:node1chi8o4qax1120 .

_:node1chi8o4qax1120 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "TV" .

<http://telegraphis.net/data/countries/TV#TV> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Tuvalu"@en ;
	gn:population "12000" ;
	owl:sameAs <http://dbpedia.org/resource/Tuvalu> , <http://sws.geonames.org/2110297/> , <http://www.geonames.org/countries/#TV> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Tuvalu> .

<http://telegraphis.net/data/countries/TW#TW> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/TW/Taipei#Taipei> ;
	geographis:currency <http://telegraphis.net/data/currencies/TWD#TWD> ;
	geographis:isoAlpha2 "TW" ;
	geographis:isoAlpha3 "TWN" ;
	geographis:isoNumeric "158" ;
	geographis:isoShortName "TAIWAN, PROVINCE OF CHINA"@en , "TAÏWAN, PROVINCE DE CHINE"@fr ;
	geographis:landArea _:node1chi8o4qax1121 .

_:node1chi8o4qax1121 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "35980.0" .

<http://telegraphis.net/data/countries/TW#TW> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax1122 .

_:node1chi8o4qax1122 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "TW" .

<http://telegraphis.net/data/countries/TW#TW> code:hasCode _:node1chi8o4qax1123 .

_:node1chi8o4qax1123 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "TWN" .

<http://telegraphis.net/data/countries/TW#TW> code:hasCode _:node1chi8o4qax1124 .

_:node1chi8o4qax1124 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "158" .

<http://telegraphis.net/data/countries/TW#TW> code:hasCode _:node1chi8o4qax1125 .

_:node1chi8o4qax1125 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "TW" .

<http://telegraphis.net/data/countries/TW#TW> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Taiwan"@en ;
	gn:population "22894384" ;
	owl:sameAs <http://dbpedia.org/resource/Taiwan> , <http://sws.geonames.org/1668284/> , <http://www.geonames.org/countries/#TW> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Taiwan> .

<http://telegraphis.net/data/countries/TZ#TZ> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/TZ/Dodoma#Dodoma> ;
	geographis:currency <http://telegraphis.net/data/currencies/TZS#TZS> ;
	geographis:isoAlpha2 "TZ" ;
	geographis:isoAlpha3 "TZA" ;
	geographis:isoNumeric "834" ;
	geographis:isoShortName "TANZANIA, UNITED REPUBLIC OF"@en , "TANZANIE, RÉPUBLIQUE-UNIE DE"@fr ;
	geographis:landArea _:node1chi8o4qax1126 .

_:node1chi8o4qax1126 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "945087.0" .

<http://telegraphis.net/data/countries/TZ#TZ> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax1127 .

_:node1chi8o4qax1127 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "TZ" .

<http://telegraphis.net/data/countries/TZ#TZ> code:hasCode _:node1chi8o4qax1128 .

_:node1chi8o4qax1128 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "TZA" .

<http://telegraphis.net/data/countries/TZ#TZ> code:hasCode _:node1chi8o4qax1129 .

_:node1chi8o4qax1129 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "834" .

<http://telegraphis.net/data/countries/TZ#TZ> code:hasCode _:node1chi8o4qax1130 .

_:node1chi8o4qax1130 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "TZ" .

<http://telegraphis.net/data/countries/TZ#TZ> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Tanzania"@en ;
	gn:population "40213000" ;
	owl:sameAs <http://dbpedia.org/resource/Tanzania> , <http://sws.geonames.org/149590/> , <http://www.geonames.org/countries/#TZ> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Tanzania> .

<http://telegraphis.net/data/countries/UA#UA> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/UA/Kiev#Kiev> ;
	geographis:currency <http://telegraphis.net/data/currencies/UAH#UAH> ;
	geographis:isoAlpha2 "UA" ;
	geographis:isoAlpha3 "UKR" ;
	geographis:isoNumeric "804" ;
	geographis:isoShortName "UKRAINE"@fr , "UKRAINE"@en ;
	geographis:landArea _:node1chi8o4qax1131 .

_:node1chi8o4qax1131 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "603700.0" .

<http://telegraphis.net/data/countries/UA#UA> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax1132 .

_:node1chi8o4qax1132 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "UA" .

<http://telegraphis.net/data/countries/UA#UA> code:hasCode _:node1chi8o4qax1133 .

_:node1chi8o4qax1133 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "UKR" .

<http://telegraphis.net/data/countries/UA#UA> code:hasCode _:node1chi8o4qax1134 .

_:node1chi8o4qax1134 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "804" .

<http://telegraphis.net/data/countries/UA#UA> code:hasCode _:node1chi8o4qax1135 .

_:node1chi8o4qax1135 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "UP" .

<http://telegraphis.net/data/countries/UA#UA> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Ukraine"@en ;
	gn:population "45994000" ;
	owl:sameAs <http://dbpedia.org/resource/Ukraine> , <http://sws.geonames.org/690791/> , <http://www.geonames.org/countries/#UA> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Ukraine> .

<http://telegraphis.net/data/countries/UG#UG> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/UG/Kampala#Kampala> ;
	geographis:currency <http://telegraphis.net/data/currencies/UGX#UGX> ;
	geographis:isoAlpha2 "UG" ;
	geographis:isoAlpha3 "UGA" ;
	geographis:isoNumeric "800" ;
	geographis:isoShortName "OUGANDA"@fr , "UGANDA"@en ;
	geographis:landArea _:node1chi8o4qax1136 .

_:node1chi8o4qax1136 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "236040.0" .

<http://telegraphis.net/data/countries/UG#UG> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax1137 .

_:node1chi8o4qax1137 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "UG" .

<http://telegraphis.net/data/countries/UG#UG> code:hasCode _:node1chi8o4qax1138 .

_:node1chi8o4qax1138 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "UGA" .

<http://telegraphis.net/data/countries/UG#UG> code:hasCode _:node1chi8o4qax1139 .

_:node1chi8o4qax1139 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "800" .

<http://telegraphis.net/data/countries/UG#UG> code:hasCode _:node1chi8o4qax1140 .

_:node1chi8o4qax1140 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "UG" .

<http://telegraphis.net/data/countries/UG#UG> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Uganda"@en ;
	gn:population "31367000" ;
	owl:sameAs <http://dbpedia.org/resource/Uganda> , <http://sws.geonames.org/226074/> , <http://www.geonames.org/countries/#UG> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Uganda> .

<http://telegraphis.net/data/countries/UM#UM> a gn:Country ;
	geographis:isoAlpha2 "UM" ;
	geographis:isoAlpha3 "UMI" ;
	geographis:isoNumeric "581" ;
	geographis:isoShortName "UNITED STATES MINOR OUTLYING ISLANDS"@en , "ÎLES MINEURES ÉLOIGNÉES DES ÉTATS-UNIS"@fr ;
	geographis:landArea _:node1chi8o4qax1141 .

_:node1chi8o4qax1141 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "0.0" .

<http://telegraphis.net/data/countries/UM#UM> geographis:onContinent <http://telegraphis.net/data/continents/OC#OC> ;
	code:hasCode _:node1chi8o4qax1142 .

_:node1chi8o4qax1142 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "UM" .

<http://telegraphis.net/data/countries/UM#UM> code:hasCode _:node1chi8o4qax1143 .

_:node1chi8o4qax1143 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "UMI" .

<http://telegraphis.net/data/countries/UM#UM> code:hasCode _:node1chi8o4qax1144 .

_:node1chi8o4qax1144 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "581" .

<http://telegraphis.net/data/countries/UM#UM> code:hasCode _:node1chi8o4qax1145 .

_:node1chi8o4qax1145 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "None" .

<http://telegraphis.net/data/countries/UM#UM> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "United States Minor Outlying Islands"@en ;
	gn:population "0" ;
	owl:sameAs <http://dbpedia.org/resource/United_States_Minor_Outlying_Islands> , <http://sws.geonames.org/5854968/> , <http://www.geonames.org/countries/#UM> .

<http://telegraphis.net/data/countries/US#US> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/US/Washington#Washington> ;
	geographis:currency <http://telegraphis.net/data/currencies/USD#USD> , <http://telegraphis.net/data/currencies/USN#USN> , <http://telegraphis.net/data/currencies/USS#USS> ;
	geographis:isoAlpha2 "US" ;
	geographis:isoAlpha3 "USA" ;
	geographis:isoNumeric "840" ;
	geographis:isoShortName "UNITED STATES"@en , "ÉTATS-UNIS"@fr ;
	geographis:landArea _:node1chi8o4qax1146 .

_:node1chi8o4qax1146 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "9629091.0" .

<http://telegraphis.net/data/countries/US#US> geographis:onContinent <http://telegraphis.net/data/continents/NA#NA> ;
	code:hasCode _:node1chi8o4qax1147 .

_:node1chi8o4qax1147 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "US" .

<http://telegraphis.net/data/countries/US#US> code:hasCode _:node1chi8o4qax1148 .

_:node1chi8o4qax1148 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "USA" .

<http://telegraphis.net/data/countries/US#US> code:hasCode _:node1chi8o4qax1149 .

_:node1chi8o4qax1149 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "840" .

<http://telegraphis.net/data/countries/US#US> code:hasCode _:node1chi8o4qax1150 .

_:node1chi8o4qax1150 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "US" .

<http://telegraphis.net/data/countries/US#US> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "United States"@en ;
	gn:population "303824000" ;
	owl:sameAs <http://dbpedia.org/resource/United_States> , <http://sws.geonames.org/6252001/> , <http://www.geonames.org/countries/#US> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/United_States> .

<http://telegraphis.net/data/countries/UY#UY> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/UY/Montevideo#Montevideo> ;
	geographis:currency <http://telegraphis.net/data/currencies/UYU#UYU> ;
	geographis:isoAlpha2 "UY" ;
	geographis:isoAlpha3 "URY" ;
	geographis:isoNumeric "858" ;
	geographis:isoShortName "URUGUAY"@fr , "URUGUAY"@en ;
	geographis:landArea _:node1chi8o4qax1151 .

_:node1chi8o4qax1151 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "176220.0" .

<http://telegraphis.net/data/countries/UY#UY> geographis:onContinent <http://telegraphis.net/data/continents/SA#SA> ;
	code:hasCode _:node1chi8o4qax1152 .

_:node1chi8o4qax1152 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "UY" .

<http://telegraphis.net/data/countries/UY#UY> code:hasCode _:node1chi8o4qax1153 .

_:node1chi8o4qax1153 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "URY" .

<http://telegraphis.net/data/countries/UY#UY> code:hasCode _:node1chi8o4qax1154 .

_:node1chi8o4qax1154 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "858" .

<http://telegraphis.net/data/countries/UY#UY> code:hasCode _:node1chi8o4qax1155 .

_:node1chi8o4qax1155 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "UY" .

<http://telegraphis.net/data/countries/UY#UY> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Uruguay"@en ;
	gn:population "3477000" ;
	owl:sameAs <http://dbpedia.org/resource/Uruguay> , <http://sws.geonames.org/3439705/> , <http://www.geonames.org/countries/#UY> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Uruguay> .

<http://telegraphis.net/data/countries/UZ#UZ> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/UZ/Tashkent#Tashkent> ;
	geographis:currency <http://telegraphis.net/data/currencies/UZS#UZS> ;
	geographis:isoAlpha2 "UZ" ;
	geographis:isoAlpha3 "UZB" ;
	geographis:isoNumeric "860" ;
	geographis:isoShortName "OUZBÉKISTAN"@fr , "UZBEKISTAN"@en ;
	geographis:landArea _:node1chi8o4qax1156 .

_:node1chi8o4qax1156 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "447400.0" .

<http://telegraphis.net/data/countries/UZ#UZ> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax1157 .

_:node1chi8o4qax1157 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "UZ" .

<http://telegraphis.net/data/countries/UZ#UZ> code:hasCode _:node1chi8o4qax1158 .

_:node1chi8o4qax1158 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "UZB" .

<http://telegraphis.net/data/countries/UZ#UZ> code:hasCode _:node1chi8o4qax1159 .

_:node1chi8o4qax1159 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "860" .

<http://telegraphis.net/data/countries/UZ#UZ> code:hasCode _:node1chi8o4qax1160 .

_:node1chi8o4qax1160 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "UZ" .

<http://telegraphis.net/data/countries/UZ#UZ> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Uzbekistan"@en ;
	gn:population "28268000" ;
	owl:sameAs <http://dbpedia.org/resource/Uzbekistan> , <http://sws.geonames.org/1512440/> , <http://www.geonames.org/countries/#UZ> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Uzbekistan> .

<http://telegraphis.net/data/countries/VA#VA> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/VA/Vatican_City#VaticanCity> ;
	geographis:currency <http://telegraphis.net/data/currencies/EUR#EUR> ;
	geographis:isoAlpha2 "VA" ;
	geographis:isoAlpha3 "VAT" ;
	geographis:isoNumeric "336" ;
	geographis:isoShortName "HOLY SEE (VATICAN CITY STATE)"@en , "SAINT-SIÈGE (ÉTAT DE LA CITÉ DU VATICAN)"@fr ;
	geographis:landArea _:node1chi8o4qax1161 .

_:node1chi8o4qax1161 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "0.4" .

<http://telegraphis.net/data/countries/VA#VA> geographis:onContinent <http://telegraphis.net/data/continents/EU#EU> ;
	code:hasCode _:node1chi8o4qax1162 .

_:node1chi8o4qax1162 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "VA" .

<http://telegraphis.net/data/countries/VA#VA> code:hasCode _:node1chi8o4qax1163 .

_:node1chi8o4qax1163 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "VAT" .

<http://telegraphis.net/data/countries/VA#VA> code:hasCode _:node1chi8o4qax1164 .

_:node1chi8o4qax1164 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "336" .

<http://telegraphis.net/data/countries/VA#VA> code:hasCode _:node1chi8o4qax1165 .

_:node1chi8o4qax1165 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "VT" .

<http://telegraphis.net/data/countries/VA#VA> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Vatican"@en ;
	gn:population "921" ;
	owl:sameAs <http://dbpedia.org/resource/Vatican_City> , <http://sws.geonames.org/3164670/> , <http://www.geonames.org/countries/#VA> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Vatican_City_%28Holy_See%29> .

<http://telegraphis.net/data/countries/VC#VC> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/VC/Kingstown#Kingstown> ;
	geographis:currency <http://telegraphis.net/data/currencies/XCD#XCD> ;
	geographis:isoAlpha2 "VC" ;
	geographis:isoAlpha3 "VCT" ;
	geographis:isoNumeric "670" ;
	geographis:isoShortName "SAINT VINCENT AND THE GRENADINES"@en , "SAINT-VINCENT-ET-LES GRENADINES"@fr ;
	geographis:landArea _:node1chi8o4qax1166 .

_:node1chi8o4qax1166 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "389.0" .

<http://telegraphis.net/data/countries/VC#VC> geographis:onContinent <http://telegraphis.net/data/continents/NA#NA> ;
	code:hasCode _:node1chi8o4qax1167 .

_:node1chi8o4qax1167 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "VC" .

<http://telegraphis.net/data/countries/VC#VC> code:hasCode _:node1chi8o4qax1168 .

_:node1chi8o4qax1168 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "VCT" .

<http://telegraphis.net/data/countries/VC#VC> code:hasCode _:node1chi8o4qax1169 .

_:node1chi8o4qax1169 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "670" .

<http://telegraphis.net/data/countries/VC#VC> code:hasCode _:node1chi8o4qax1170 .

_:node1chi8o4qax1170 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "VC" .

<http://telegraphis.net/data/countries/VC#VC> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Saint Vincent and the Grenadines"@en ;
	gn:population "117534" ;
	owl:sameAs <http://dbpedia.org/resource/Saint_Vincent_and_the_Grenadines> , <http://sws.geonames.org/3577815/> , <http://www.geonames.org/countries/#VC> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Saint_Vincent_and_the_Grenadines> .

<http://telegraphis.net/data/countries/VE#VE> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/VE/Caracas#Caracas> ;
	geographis:currency <http://telegraphis.net/data/currencies/VEF#VEF> ;
	geographis:isoAlpha2 "VE" ;
	geographis:isoAlpha3 "VEN" ;
	geographis:isoNumeric "862" ;
	geographis:isoShortName "VENEZUELA, BOLIVARIAN REPUBLIC OF"@en , "VENEZUELA, RÉPUBLIQUE BOLIVARIENNE DU"@fr ;
	geographis:landArea _:node1chi8o4qax1171 .

_:node1chi8o4qax1171 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "912050.0" .

<http://telegraphis.net/data/countries/VE#VE> geographis:onContinent <http://telegraphis.net/data/continents/SA#SA> ;
	code:hasCode _:node1chi8o4qax1172 .

_:node1chi8o4qax1172 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "VE" .

<http://telegraphis.net/data/countries/VE#VE> code:hasCode _:node1chi8o4qax1173 .

_:node1chi8o4qax1173 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "VEN" .

<http://telegraphis.net/data/countries/VE#VE> code:hasCode _:node1chi8o4qax1174 .

_:node1chi8o4qax1174 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "862" .

<http://telegraphis.net/data/countries/VE#VE> code:hasCode _:node1chi8o4qax1175 .

_:node1chi8o4qax1175 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "VE" .

<http://telegraphis.net/data/countries/VE#VE> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Venezuela"@en ;
	gn:population "26414000" ;
	owl:sameAs <http://dbpedia.org/resource/Venezuela> , <http://sws.geonames.org/3625428/> , <http://www.geonames.org/countries/#VE> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Venezuela> .

<http://telegraphis.net/data/countries/VG#VG> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/VG/Road_Town#RoadTown> ;
	geographis:isoAlpha2 "VG" ;
	geographis:isoAlpha3 "VGB" ;
	geographis:isoNumeric "092" ;
	geographis:isoShortName "VIRGIN ISLANDS, BRITISH"@en , "ÎLES VIERGES BRITANNIQUES"@fr ;
	geographis:landArea _:node1chi8o4qax1176 .

_:node1chi8o4qax1176 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "153.0" .

<http://telegraphis.net/data/countries/VG#VG> geographis:onContinent <http://telegraphis.net/data/continents/NA#NA> ;
	code:hasCode _:node1chi8o4qax1177 .

_:node1chi8o4qax1177 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "VG" .

<http://telegraphis.net/data/countries/VG#VG> code:hasCode _:node1chi8o4qax1178 .

_:node1chi8o4qax1178 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "VGB" .

<http://telegraphis.net/data/countries/VG#VG> code:hasCode _:node1chi8o4qax1179 .

_:node1chi8o4qax1179 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "092" .

<http://telegraphis.net/data/countries/VG#VG> code:hasCode _:node1chi8o4qax1180 .

_:node1chi8o4qax1180 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "VI" .

<http://telegraphis.net/data/countries/VG#VG> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "British Virgin Islands"@en ;
	gn:population "21730" ;
	owl:sameAs <http://dbpedia.org/resource/British_Virgin_Islands> , <http://sws.geonames.org/3577718/> , <http://www.geonames.org/countries/#VG> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/British_Virgin_Islands> .

<http://telegraphis.net/data/countries/VI#VI> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/VI/Charlotte_Amalie#CharlotteAmalie> ;
	geographis:currency <http://telegraphis.net/data/currencies/USD#USD> ;
	geographis:isoAlpha2 "VI" ;
	geographis:isoAlpha3 "VIR" ;
	geographis:isoNumeric "850" ;
	geographis:isoShortName "VIRGIN ISLANDS, U.S."@en , "ÎLES VIERGES DES ÉTATS-UNIS"@fr ;
	geographis:landArea _:node1chi8o4qax1181 .

_:node1chi8o4qax1181 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "352.0" .

<http://telegraphis.net/data/countries/VI#VI> geographis:onContinent <http://telegraphis.net/data/continents/NA#NA> ;
	code:hasCode _:node1chi8o4qax1182 .

_:node1chi8o4qax1182 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "VI" .

<http://telegraphis.net/data/countries/VI#VI> code:hasCode _:node1chi8o4qax1183 .

_:node1chi8o4qax1183 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "VIR" .

<http://telegraphis.net/data/countries/VI#VI> code:hasCode _:node1chi8o4qax1184 .

_:node1chi8o4qax1184 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "850" .

<http://telegraphis.net/data/countries/VI#VI> code:hasCode _:node1chi8o4qax1185 .

_:node1chi8o4qax1185 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "VQ" .

<http://telegraphis.net/data/countries/VI#VI> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "U.S. Virgin Islands"@en ;
	gn:population "108708" ;
	owl:sameAs <http://dbpedia.org/resource/United_States_Virgin_Islands> , <http://sws.geonames.org/4796775/> , <http://www.geonames.org/countries/#VI> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Virgin_Islands> .

<http://telegraphis.net/data/countries/VN#VN> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/VN/Hanoi#Hanoi> ;
	geographis:currency <http://telegraphis.net/data/currencies/VND#VND> ;
	geographis:isoAlpha2 "VN" ;
	geographis:isoAlpha3 "VNM" ;
	geographis:isoNumeric "704" ;
	geographis:isoShortName "VIET NAM"@fr , "VIET NAM"@en ;
	geographis:landArea _:node1chi8o4qax1186 .

_:node1chi8o4qax1186 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "329560.0" .

<http://telegraphis.net/data/countries/VN#VN> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax1187 .

_:node1chi8o4qax1187 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "VN" .

<http://telegraphis.net/data/countries/VN#VN> code:hasCode _:node1chi8o4qax1188 .

_:node1chi8o4qax1188 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "VNM" .

<http://telegraphis.net/data/countries/VN#VN> code:hasCode _:node1chi8o4qax1189 .

_:node1chi8o4qax1189 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "704" .

<http://telegraphis.net/data/countries/VN#VN> code:hasCode _:node1chi8o4qax1190 .

_:node1chi8o4qax1190 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "VM" .

<http://telegraphis.net/data/countries/VN#VN> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Vietnam"@en ;
	gn:population "86116000" ;
	owl:sameAs <http://dbpedia.org/resource/Vietnam> , <http://sws.geonames.org/1562822/> , <http://www.geonames.org/countries/#VN> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Vietnam> .

<http://telegraphis.net/data/countries/VU#VU> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/VU/Port_Vila#PortVila> ;
	geographis:currency <http://telegraphis.net/data/currencies/VUV#VUV> ;
	geographis:isoAlpha2 "VU" ;
	geographis:isoAlpha3 "VUT" ;
	geographis:isoNumeric "548" ;
	geographis:isoShortName "VANUATU"@fr , "VANUATU"@en ;
	geographis:landArea _:node1chi8o4qax1191 .

_:node1chi8o4qax1191 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "12200.0" .

<http://telegraphis.net/data/countries/VU#VU> geographis:onContinent <http://telegraphis.net/data/continents/OC#OC> ;
	code:hasCode _:node1chi8o4qax1192 .

_:node1chi8o4qax1192 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "VU" .

<http://telegraphis.net/data/countries/VU#VU> code:hasCode _:node1chi8o4qax1193 .

_:node1chi8o4qax1193 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "VUT" .

<http://telegraphis.net/data/countries/VU#VU> code:hasCode _:node1chi8o4qax1194 .

_:node1chi8o4qax1194 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "548" .

<http://telegraphis.net/data/countries/VU#VU> code:hasCode _:node1chi8o4qax1195 .

_:node1chi8o4qax1195 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "NH" .

<http://telegraphis.net/data/countries/VU#VU> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Vanuatu"@en ;
	gn:population "215000" ;
	owl:sameAs <http://dbpedia.org/resource/Vanuatu> , <http://sws.geonames.org/2134431/> , <http://www.geonames.org/countries/#VU> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Vanuatu> .

<http://telegraphis.net/data/countries/WF#WF> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/WF/Mat%C3%A2%27Utu#Mat%C3%A2%27Utu> ;
	geographis:currency <http://telegraphis.net/data/currencies/XPF#XPF> ;
	geographis:isoAlpha2 "WF" ;
	geographis:isoAlpha3 "WLF" ;
	geographis:isoNumeric "876" ;
	geographis:isoShortName "WALLIS AND FUTUNA"@en , "WALLIS ET FUTUNA"@fr ;
	geographis:landArea _:node1chi8o4qax1196 .

_:node1chi8o4qax1196 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "274.0" .

<http://telegraphis.net/data/countries/WF#WF> geographis:onContinent <http://telegraphis.net/data/continents/OC#OC> ;
	code:hasCode _:node1chi8o4qax1197 .

_:node1chi8o4qax1197 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "WF" .

<http://telegraphis.net/data/countries/WF#WF> code:hasCode _:node1chi8o4qax1198 .

_:node1chi8o4qax1198 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "WLF" .

<http://telegraphis.net/data/countries/WF#WF> code:hasCode _:node1chi8o4qax1199 .

_:node1chi8o4qax1199 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "876" .

<http://telegraphis.net/data/countries/WF#WF> code:hasCode _:node1chi8o4qax1200 .

_:node1chi8o4qax1200 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "WF" .

<http://telegraphis.net/data/countries/WF#WF> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Wallis and Futuna"@en ;
	gn:population "16025" ;
	owl:sameAs <http://dbpedia.org/resource/Wallis_and_Futuna> , <http://sws.geonames.org/4034749/> , <http://www.geonames.org/countries/#WF> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Wallis_and_Futuna> .

<http://telegraphis.net/data/countries/WS#WS> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/WS/Apia#Apia> ;
	geographis:currency <http://telegraphis.net/data/currencies/WST#WST> ;
	geographis:isoAlpha2 "WS" ;
	geographis:isoAlpha3 "WSM" ;
	geographis:isoNumeric "882" ;
	geographis:isoShortName "SAMOA"@fr , "SAMOA"@en ;
	geographis:landArea _:node1chi8o4qax1201 .

_:node1chi8o4qax1201 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "2944.0" .

<http://telegraphis.net/data/countries/WS#WS> geographis:onContinent <http://telegraphis.net/data/continents/OC#OC> ;
	code:hasCode _:node1chi8o4qax1202 .

_:node1chi8o4qax1202 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "WS" .

<http://telegraphis.net/data/countries/WS#WS> code:hasCode _:node1chi8o4qax1203 .

_:node1chi8o4qax1203 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "WSM" .

<http://telegraphis.net/data/countries/WS#WS> code:hasCode _:node1chi8o4qax1204 .

_:node1chi8o4qax1204 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "882" .

<http://telegraphis.net/data/countries/WS#WS> code:hasCode _:node1chi8o4qax1205 .

_:node1chi8o4qax1205 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "WS" .

<http://telegraphis.net/data/countries/WS#WS> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Samoa"@en ;
	gn:population "217000" ;
	owl:sameAs <http://dbpedia.org/resource/Samoa> , <http://sws.geonames.org/4034894/> , <http://www.geonames.org/countries/#WS> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Samoa> .

<http://telegraphis.net/data/countries/YE#YE> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/YE/San%E2%80%98a%E2%80%99#San%E2%80%98a%E2%80%99> ;
	geographis:currency <http://telegraphis.net/data/currencies/YER#YER> ;
	geographis:isoAlpha2 "YE" ;
	geographis:isoAlpha3 "YEM" ;
	geographis:isoNumeric "887" ;
	geographis:isoShortName "YEMEN"@en , "YÉMEN"@fr ;
	geographis:landArea _:node1chi8o4qax1206 .

_:node1chi8o4qax1206 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "527970.0" .

<http://telegraphis.net/data/countries/YE#YE> geographis:onContinent <http://telegraphis.net/data/continents/AS#AS> ;
	code:hasCode _:node1chi8o4qax1207 .

_:node1chi8o4qax1207 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "YE" .

<http://telegraphis.net/data/countries/YE#YE> code:hasCode _:node1chi8o4qax1208 .

_:node1chi8o4qax1208 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "YEM" .

<http://telegraphis.net/data/countries/YE#YE> code:hasCode _:node1chi8o4qax1209 .

_:node1chi8o4qax1209 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "887" .

<http://telegraphis.net/data/countries/YE#YE> code:hasCode _:node1chi8o4qax1210 .

_:node1chi8o4qax1210 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "YM" .

<http://telegraphis.net/data/countries/YE#YE> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Yemen"@en ;
	gn:population "23013000" ;
	owl:sameAs <http://dbpedia.org/resource/Yemen> , <http://sws.geonames.org/69543/> , <http://www.geonames.org/countries/#YE> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Yemen> .

<http://telegraphis.net/data/countries/YT#YT> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/YT/Mamoudzou#Mamoudzou> ;
	geographis:isoAlpha2 "YT" ;
	geographis:isoAlpha3 "MYT" ;
	geographis:isoNumeric "175" ;
	geographis:isoShortName "MAYOTTE"@fr , "MAYOTTE"@en ;
	geographis:landArea _:node1chi8o4qax1211 .

_:node1chi8o4qax1211 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "374.0" .

<http://telegraphis.net/data/countries/YT#YT> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax1212 .

_:node1chi8o4qax1212 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "YT" .

<http://telegraphis.net/data/countries/YT#YT> code:hasCode _:node1chi8o4qax1213 .

_:node1chi8o4qax1213 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "MYT" .

<http://telegraphis.net/data/countries/YT#YT> code:hasCode _:node1chi8o4qax1214 .

_:node1chi8o4qax1214 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "175" .

<http://telegraphis.net/data/countries/YT#YT> code:hasCode _:node1chi8o4qax1215 .

_:node1chi8o4qax1215 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "MF" .

<http://telegraphis.net/data/countries/YT#YT> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Mayotte"@en ;
	gn:population "159042" ;
	owl:sameAs <http://dbpedia.org/resource/Mayotte> , <http://sws.geonames.org/1024031/> , <http://www.geonames.org/countries/#YT> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Mayotte> .

<http://telegraphis.net/data/countries/ZA#ZA> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/ZA/Pretoria#Pretoria> ;
	geographis:currency <http://telegraphis.net/data/currencies/ZAR#ZAR> ;
	geographis:isoAlpha2 "ZA" ;
	geographis:isoAlpha3 "ZAF" ;
	geographis:isoNumeric "710" ;
	geographis:isoShortName "AFRIQUE DU SUD"@fr , "SOUTH AFRICA"@en ;
	geographis:landArea _:node1chi8o4qax1216 .

_:node1chi8o4qax1216 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "1219912.0" .

<http://telegraphis.net/data/countries/ZA#ZA> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax1217 .

_:node1chi8o4qax1217 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "ZA" .

<http://telegraphis.net/data/countries/ZA#ZA> code:hasCode _:node1chi8o4qax1218 .

_:node1chi8o4qax1218 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "ZAF" .

<http://telegraphis.net/data/countries/ZA#ZA> code:hasCode _:node1chi8o4qax1219 .

_:node1chi8o4qax1219 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "710" .

<http://telegraphis.net/data/countries/ZA#ZA> code:hasCode _:node1chi8o4qax1220 .

_:node1chi8o4qax1220 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "SF" .

<http://telegraphis.net/data/countries/ZA#ZA> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "South Africa"@en ;
	gn:population "43786000" ;
	owl:sameAs <http://dbpedia.org/resource/South_Africa> , <http://sws.geonames.org/953987/> , <http://www.geonames.org/countries/#ZA> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/South_Africa> .

<http://telegraphis.net/data/countries/ZM#ZM> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/ZM/Lusaka#Lusaka> ;
	geographis:currency <http://telegraphis.net/data/currencies/ZMK#ZMK> ;
	geographis:isoAlpha2 "ZM" ;
	geographis:isoAlpha3 "ZMB" ;
	geographis:isoNumeric "894" ;
	geographis:isoShortName "ZAMBIA"@en , "ZAMBIE"@fr ;
	geographis:landArea _:node1chi8o4qax1221 .

_:node1chi8o4qax1221 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "752614.0" .

<http://telegraphis.net/data/countries/ZM#ZM> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax1222 .

_:node1chi8o4qax1222 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "ZM" .

<http://telegraphis.net/data/countries/ZM#ZM> code:hasCode _:node1chi8o4qax1223 .

_:node1chi8o4qax1223 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "ZMB" .

<http://telegraphis.net/data/countries/ZM#ZM> code:hasCode _:node1chi8o4qax1224 .

_:node1chi8o4qax1224 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "894" .

<http://telegraphis.net/data/countries/ZM#ZM> code:hasCode _:node1chi8o4qax1225 .

_:node1chi8o4qax1225 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "ZA" .

<http://telegraphis.net/data/countries/ZM#ZM> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Zambia"@en ;
	gn:population "11669000" ;
	owl:sameAs <http://dbpedia.org/resource/Zambia> , <http://sws.geonames.org/895949/> , <http://www.geonames.org/countries/#ZM> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Zambia> .

<http://telegraphis.net/data/countries/ZW#ZW> a gn:Country ;
	geographis:capital <http://telegraphis.net/data/capitals/ZW/Harare#Harare> ;
	geographis:currency <http://telegraphis.net/data/currencies/ZWL#ZWL> ;
	geographis:isoAlpha2 "ZW" ;
	geographis:isoAlpha3 "ZWE" ;
	geographis:isoNumeric "716" ;
	geographis:isoShortName "ZIMBABWE"@fr , "ZIMBABWE"@en ;
	geographis:landArea _:node1chi8o4qax1226 .

_:node1chi8o4qax1226 a measurement:Measurement ;
	measurement:quantityMeasured quantity:Area ;
	measurement:unit metric:SquareKilometre ;
	rdf:value "390580.0" .

<http://telegraphis.net/data/countries/ZW#ZW> geographis:onContinent <http://telegraphis.net/data/continents/AF#AF> ;
	code:hasCode _:node1chi8o4qax1227 .

_:node1chi8o4qax1227 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al2> ;
	rdf:value "ZW" .

<http://telegraphis.net/data/countries/ZW#ZW> code:hasCode _:node1chi8o4qax1228 .

_:node1chi8o4qax1228 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661al3> ;
	rdf:value "ZWE" .

<http://telegraphis.net/data/countries/ZW#ZW> code:hasCode _:node1chi8o4qax1229 .

_:node1chi8o4qax1229 a code:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#iso31661num> ;
	rdf:value "716" .

<http://telegraphis.net/data/countries/ZW#ZW> code:hasCode _:node1chi8o4qax1230 .

_:node1chi8o4qax1230 a geographis:Code ;
	code:inCodeScheme <http://telegraphis.net/data/countries/codeSchemes#fips> ;
	rdf:value "ZI" .

<http://telegraphis.net/data/countries/ZW#ZW> gn:featureClass gn:A ;
	gn:featureCode gn:A.PCL ;
	gn:name "Zimbabwe"@en ;
	gn:population "12382000" ;
	owl:sameAs <http://dbpedia.org/resource/Zimbabwe> , <http://sws.geonames.org/878675/> , <http://www.geonames.org/countries/#ZW> , <http://www4.wiwiss.fu-berlin.de/factbook/resource/Zimbabwe> .

`

                           
