var countries = {}

countries['BRA'] = 'http://www.geonames.org/flags/l/br.gif';//Brazil
countries['ENG'] = 'http://www.geonames.org/flags/l/gb.gif';//England  ---
countries['URU'] = 'http://www.geonames.org/flags/l/uy.gif';//Uruguay  ---
countries['ITA'] = 'http://www.geonames.org/flags/l/it.gif';//Italia
countries['CRC'] = 'http://www.geonames.org/flags/l/cr.gif';//Costa Rica
countries['NED'] = 'http://www.geonames.org/flags/l/nl.gif';//Netherlands - Holland
countries['AUS'] = 'http://www.geonames.org/flags/l/au.gif';//Australia
countries['ESP'] = 'http://www.geonames.org/flags/l/es.gif';//Espana
countries['CHI'] = 'http://www.geonames.org/flags/l/cl.gif';//Chile
countries['CRO'] = 'http://www.geonames.org/flags/l/hr.gif';//Croatia
countries['CMR'] = 'http://www.geonames.org/flags/l/cm.gif';//Cameroon
countries['MEX'] = 'http://www.geonames.org/flags/l/mx.gif';//Mexico  ---
countries['COL'] = 'http://www.geonames.org/flags/l/co.gif';//Colombia
countries['CIV'] = 'http://www.geonames.org/flags/l/ci.gif';//Cote D'Ivore
countries['GRE'] = 'http://www.geonames.org/flags/l/cr.gif';//Greece
countries['JPN'] = 'http://www.geonames.org/flags/l/jp.gif';//Japan
countries['IRN'] = 'http://www.geonames.org/flags/l/ir.gif';//Iran
countries['ARG'] = 'http://www.geonames.org/flags/l/ar.gif';//Argentina
countries['NGA'] = 'http://www.geonames.org/flags/l/ng.gif';//Nigeria
countries['BIH'] = 'http://www.geonames.org/flags/l/ba.gif';//Bosnia and Herzegovina
countries['FRA'] = 'http://www.geonames.org/flags/l/fr.gif';//France
countries['SUI'] = 'http://www.geonames.org/flags/l/ch.gif';//Switzerland  ---
countries['ECU'] = 'http://www.geonames.org/flags/l/ec.gif';//Ecuador
countries['HON'] = 'http://www.geonames.org/flags/l/hn.gif';//Honduras  ---
countries['GER'] = 'http://www.geonames.org/flags/l/de.gif';//Germany   ---
countries['GHA'] = 'http://www.geonames.org/flags/l/gh.gif';//Ghana
countries['POR'] = 'http://www.geonames.org/flags/l/pt.gif';//Portugal ----
countries['USA'] = 'http://www.geonames.org/flags/l/us.gif';//USA
countries['BEL'] = 'http://www.geonames.org/flags/l/be.gif';//Belgium
countries['RUS'] = 'http://www.geonames.org/flags/l/ru.gif';//Russia
countries['ALG'] = 'http://www.geonames.org/flags/l/dz.gif';//Algeria
countries['KOR'] = 'http://www.geonames.org/flags/l/kr.gif';//Korea  ---

function getFlagImage(code) {
    return ( '<img src="'+countries[code]+'"/>');			
}