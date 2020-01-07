<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:fn="http://www.w3.org/2005/xpath-functions" xmlns:sectorfinanciero="http://www.sat.gob.mx/esquemas/retencionpago/1/sectorfinanciero">

  <!-- Con el siguiente método se establece que la salida deberá ser en texto -->
  <xsl:output method="text" version="1.0" encoding="UTF-8" indent="no"/>
  
  <!--  Aquí iniciamos el procesamiento de los datos incluidos en SectorFinanciero>-->
  <xsl:template match="sectorfinanciero:SectorFinanciero">
    <!-- Iniciamos el tratamiento de los atributos de Dividendos -->
    <xsl:call-template name="Requerido">
      <xsl:with-param name="valor" select="./@Version"/>
    </xsl:call-template>
    <xsl:call-template name="Requerido">
      <xsl:with-param name="valor" select="./@IdFideicom"/>
    </xsl:call-template>
    <xsl:call-template name="Opcional">
      <xsl:with-param name="valor" select="./@NomFideicom"/>
    </xsl:call-template>
    <xsl:call-template name="Requerido">
      <xsl:with-param name="valor" select="./@DescripFideicom"/>
    </xsl:call-template>
  </xsl:template>
 </xsl:stylesheet>
