## JAVA
```java
public enum Status {
    ACTIVE("활성"),
    INACTIVE("비활성"),
    PENDING("대기");

    private final String label;

    Status(String label) {
        this.label = label;
    }

    public String getLabel() {
        return label;
    }
}
```
## JSP
순회 렌더링
```jsp
<%@ page import="com.example.enums.Status" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<%
    Status[] statusList = Status.values();
    request.setAttribute("statusList", statusList);
%>

<select name="status">
    <c:forEach var="status" items="${statusList}">
        <option value="${status.name()}">${status.label}</option>
    </c:forEach>
</select>
```

Map 렌더링
```jsp
<%@ page import="com.example.enums.Status" %>
<%@ page import="java.util.LinkedHashMap" %>
<%@ page import="java.util.Map" %>

<%
    Map<String, String> statusMap = new LinkedHashMap<>();
    for (Status s : Status.values()) {
        statusMap.put(s.name(), s.getLabel());
    }
    request.setAttribute("statusMap", statusMap);
%>

<select name="status">
    <option value="ACTIVE">${statusMap['ACTIVE']}</option>
    <option value="PENDING">${statusMap['PENDING']}</option>
</select>
```