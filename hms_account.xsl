<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
		<head>
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous"></link>
		<link rel="stylesheet" href="style.css"/>
		</head>
		<body>
		<nav class="navbar fixed-top navbar-expand-lg">
		<div class="container">
		<a class="navbar-brand active" href="index.html">Home</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
		<ul class="navbar-nav navbar-right">
		<li class="nav-item">
		<a class="nav-link" href="index.html">Log out</a>
		</li>
		<li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
		</ul>
		</div>
		</div>
		</nav>
		
		<div class="container">
		<div class="jumbotron">
			<h1 style="text-align:center">Patient bills</h1>
		</div>
		<table border="2" align="center" class="table">
		<thead class="thead-dark">
		<tr>
		<th>Bill_id</th>
		<th>Patient_Name</th>
		<th>Patient_type</th>
		<th>Bill_amount</th>
		<th>Status</th>
		</tr>
		</thead>
		<xsl:for-each select="hospital/patient">
		<xsl:sort select="bill_id"></xsl:sort>
		<tr>
		<xsl:choose>
		<xsl:when test="status = 'Complete'">
		<td bgcolor="green">
		<xsl:value-of select="bill_id"></xsl:value-of>
		</td>
		</xsl:when>
		<xsl:otherwise>
		<td>
		<xsl:value-of select="bill_id"></xsl:value-of>
		</td>
		</xsl:otherwise>
		</xsl:choose>
		<td>
		<xsl:value-of select="Name"></xsl:value-of>
		</td>
		<td>
		<xsl:value-of select="type"></xsl:value-of>
		</td>
		<td>
		<xsl:value-of select="bill_amount"></xsl:value-of>
		</td>
		<td>
		<xsl:value-of select="status"></xsl:value-of>
		</td>
		</tr>
		</xsl:for-each>
		</table>
		<br></br>
		<br></br>
		<table border="2" align="center" class="table">
		<thead class="thead-dark">
		<tr>
		<th>Bill_id</th>
		<th>Patient_Name</th>
		<th>Patient_type</th>
		<th>Bill_amount</th>
		<th>Status</th>
		</tr>
		</thead>
		<xsl:for-each select="hospital/patient">
		<xsl:sort select="bill_id"></xsl:sort>
		<xsl:if test="type = 'IN_Patient'">
		<tr>
		<xsl:choose>
		<xsl:when test="status = 'Complete'">
		<td bgcolor="green">
		<xsl:value-of select="bill_id"></xsl:value-of>
		</td>
		</xsl:when>
		<xsl:otherwise>
		<td>
		<xsl:value-of select="bill_id"></xsl:value-of>
		</td>
		</xsl:otherwise>
		</xsl:choose>
		<td>
		<xsl:value-of select="Name"></xsl:value-of>
		</td>
		<td>
		<xsl:value-of select="type"></xsl:value-of>
		</td>
		<td>
		<xsl:value-of select="bill_amount"></xsl:value-of>
		</td>
		<td>
		<xsl:value-of select="status"></xsl:value-of>
		</td>
		</tr>
		</xsl:if>
		</xsl:for-each>
		</table>
		<br></br>
		<br></br>
		<table border="2" align="center" class="table">
		<thead class="thead-dark">
		<tr>
		<th>Bill_id</th>
		<th>Patient_Name</th>
		<th>Patient_type</th>
		<th>Bill_amount</th>
		<th>Status</th>
		</tr>
		</thead>
		<xsl:for-each select="hospital/patient">
		<xsl:sort select="bill_id"></xsl:sort>
		<xsl:if test="type = 'OUT_Patient'">
		<tr>
		<xsl:choose>
		<xsl:when test="status = 'Complete'">
		<td bgcolor="green">
		<xsl:value-of select="bill_id"></xsl:value-of>
		</td>
		</xsl:when>
		<xsl:otherwise>
		<td>
		<xsl:value-of select="bill_id"></xsl:value-of>
		</td>
		</xsl:otherwise>
		</xsl:choose>
		<td>
		<xsl:value-of select="Name"></xsl:value-of>
		</td>
		<td>
		<xsl:value-of select="type"></xsl:value-of>
		</td>
		<td>
		<xsl:value-of select="bill_amount"></xsl:value-of>
		</td>
		<td>
		<xsl:value-of select="status"></xsl:value-of>
		</td>
		</tr>
		</xsl:if>
		</xsl:for-each>
		</table>
		</div>
		<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>
		</body>
		</html>
	</xsl:template>
</xsl:stylesheet>