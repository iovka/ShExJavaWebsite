function loadExample() {
   example = document.getElementById("predefined").value;
   if (example == "empty"){
       document.getElementById("data").value = "";
       document.getElementById("schema").value = "";
       document.getElementById("node").value = "";
       document.getElementById("shape").value = "";
       document.getElementById("schemaformat").value = "ShExC";
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
   } 
   
}



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
                            
                            
