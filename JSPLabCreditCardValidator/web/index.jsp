<%-- 
    Document   : index
    Created on : Mar 27, 2014, 12:34:14 AM
    Author     : Mike Moye <mtm5313@psu.edu>
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%
    
    String name = request.getParameter("name");
    String cardNum = request.getParameter("cardNum");
    String exp = request.getParameter("exp");
    
    StringBuffer buffer = new StringBuffer(cardNum);
    String cardReversed = buffer.reverse().toString();    
    //String undoubledNumbers = "";    
    int theNumber = 0; 
    
    //out.print("cardNumberBackwards: " + cardReversed);
    //out.print("<br />EvenPlacedDigitsBackwards: ");
    for (int i = 1; i < cardNum.length(); i++) {
        if (i % 2 == 1) {
            String nextPlaceEvenDigitBackwards = cardReversed.substring(i, i + 1);  
            //out.print(nextPlaceEvenDigitBackwards + " ");
        }
    }
    //out.print("<br />EvenPlacedDigitsBackwards*2: ");
    for (int i = 1; i < cardNum.length(); i++) {
        if (i % 2 == 1) {
            String nextPlaceEvenDigitBackwards = cardReversed.substring(i, i + 1);
            //out.print(Integer.parseInt(nextPlaceEvenDigitBackwards)*2 + " ");
        }
    }    
    //out.print("<br />convert to all single digits: ");
    for (int i = 1; i < cardNum.length(); i++) {
        if (i % 2 == 1) {            
            int singleDigit;            
            String nextPlaceEvenDigitBackwards = cardReversed.substring(i, i + 1);            
            if(String.valueOf(Integer.parseInt(nextPlaceEvenDigitBackwards)*2).length() == 2){                    
                    singleDigit = Integer.parseInt(String.valueOf(Integer.parseInt(nextPlaceEvenDigitBackwards)*2).substring(0,1)) + Integer.parseInt(String.valueOf(Integer.parseInt(nextPlaceEvenDigitBackwards)*2).substring(1,2));                               
            }else{
                singleDigit = Integer.parseInt(nextPlaceEvenDigitBackwards)*2;
            }
            //out.print(singleDigit);            
            theNumber += singleDigit;
        }
    }
    for (int i = 0; i < cardNum.length(); i++) {
        if (i % 2 == 0) {             
            //undoubledNumbers += cardReversed.substring(i, i + 1) + " ";
            theNumber += Integer.parseInt(cardReversed.substring(i, i + 1));
        }
    }    
    //out.print("<br />undoubledNumbers: " + undoubledNumbers);    
    //out.print("<br />theNumber " + theNumber);
%>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Lab</title>
    </head>
    <body>
        <h2>JSP Lab</h2>
        <br />
        <%=
                "Name: " + name + "<br />"
                + "Last 4: " + cardNum.substring(cardNum.length() - 4, cardNum.length()) + "<br />"
                + "Exp: " + exp
        %>
        <br />
        <%
        if (theNumber % 10 == 0) {
            out.print("<br />Card is Valid.");
        } else {
            out.print("<br />Card is Invalid.");
        }
        %>
    </body>
</html>
