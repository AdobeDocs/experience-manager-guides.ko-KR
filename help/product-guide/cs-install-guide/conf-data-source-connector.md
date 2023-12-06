---
title: 데이터 소스 커넥터 구성
description: 데이터 소스 커넥터 구성 방법 알아보기
exl-id: 6e01098b-53fe-41e0-bffe-9ad056d4a9b3
source-git-commit: 5e0584f1bf0216b8b00f00b9fe46fa682c244e08
workflow-type: tm+mt
source-wordcount: '454'
ht-degree: 0%

---

# 데이터 소스 커넥터 구성

AEM Guides는 JIRA, SQL(MySQL, PostgreSQL, Microsoft SQL Server, SQLite, MariaDB, H2DB), AdobeCommerce 및 Elasticsearch 데이터베이스에 대한 기본 제공 커넥터를 제공합니다. 기본 인터페이스를 확장하여 다른 커넥터를 추가할 수도 있습니다. 다음 구성은 다양한 데이터 소스를 쉽게 추가하는 데 도움이 됩니다. 추가되면 웹 편집기에서 데이터 소스를 볼 수 있습니다.

데이터 소스 커넥터를 구성한 다음 웹 편집기에서 사용하려면 다음 단계를 수행하십시오.

## 커넥터 구성

JSON 파일을 업로드하여 기본 제공 커넥터를 구성할 수 있습니다. 다음 샘플 설치 파일을 사용하여 JIRA, SQL(MySQL, PostgreSQL, Microsoft SQL Server, SQLite, MariaDB, H2DB), AdobeCommerce 및 Elasticsearch 데이터베이스에 대한 커넥터를 설정할 수 있습니다.

사용자 이름 및 암호를 사용한 Jira의 기본 인증을 위한 샘플 설정 파일:

```
{
	"connectorClazz": "com.adobe.guides.konnect.definitions.ootb.connector.rest.JiraConnector",
	"configName": "Jira",
	"templateFolders": ["/content/dam/dita-templates/konnect/jira"],
	"connectionConfig": {
		"configClazz": "com.adobe.guides.konnect.definitions.ootb.config.rest.BasicAuthUserNamePasswordRestConfig",
		"configData": {
			"username": "jirausername",
			"password": "jirapassword",
			"url": "https://jira.corp.adobe.com/rest/api/latest/search"
		}
	}
}
```

예를 들어 다른 이름으로 저장 `jira.json`.

토큰을 사용한 Jira의 기본 인증을 위한 샘플 설정 파일:

```
{
	"connectorClazz": "com.adobe.guides.konnect.definitions.ootb.connector.rest.JiraConnector",
	"configName": "Jira",
	"templateFolders": ["/content/dam/dita-templates/konnect/jira"],
	"connectionConfig": {
		"configClazz": "com.adobe.guides.konnect.definitions.ootb.config.rest.BasicAuthTokenRestConfig",
		"configData": {
			"token": "jiraauthtoken",
			"url": "https://jira.corp.adobe.com/rest/api/latest/search"
		}
	}
}
```

예를 들어 다른 이름으로 저장 `jira.json`.

토큰에 &quot;Basic&quot; 키워드가 있는 Jira의 기본 인증을 위한 샘플 설정 파일입니다.

```
{
	"connectorClazz": "com.adobe.guides.konnect.definitions.ootb.connector.rest.JiraConnector",
	"configName": "Jira",
	"templateFolders": ["/content/dam/dita-templates/konnect/jira"],
	"connectionConfig": {
		"configClazz": "com.adobe.guides.konnect.definitions.ootb.config.rest.BasicAuthTokenRestConfig",
		"configData": {
			"token": "Basic jiraauthtoken",
			"url": "https://jira.corp.adobe.com/rest/api/latest/search"
		}
	}
}
```

예를 들어 다른 이름으로 저장 `jira.json`.

MySql의 기본 인증을 위한 샘플 설치 파일:

```
{
	"connectorClazz": "com.adobe.guides.konnect.definitions.ootb.connector.sql.MySqlConnector",
	"configName": "MySQL",
	"templateFolders": ["/content/dam/dita-templates/konnect/sql"],
	"connectionConfig": {
		"configClazz": "com.adobe.guides.konnect.definitions.ootb.config.sql.UserPassSqlConfig",
		"configData": {
			"username": "admin",
			"password": "admin",
			"driver": "com.mysql.jdbc.Driver",
			"connectionString": "jdbc:mysql://host.corp.adobe.com:3306/plm"
		}
	}
}
```

예를 들어 다른 이름으로 저장 `mysql.json`.

PostgreSQL의 기본 인증을 위한 샘플 설치 파일:

```
{
	"connectorClazz": "com.adobe.guides.konnect.definitions.ootb.connector.sql.PostgreSqlConnector",
	"configName": "PostgreSQL",
	"templateFolders": ["/content/dam/dita-templates/konnect/sql"],
	"connectionConfig": {
		"configClazz": "com.adobe.guides.konnect.definitions.ootb.config.sql.UserPassSqlConfig",
		"configData": {
			"username": "admin",
			"password": "admin",
			"driver": "org.postgresql.Driver",
			"connectionString": "jdbc:postgresql://host:port/database"
		}
	}
}
```

예를 들어 다른 이름으로 저장 `postgres.json`.

Microsoft SQL Server의 기본 인증을 위한 샘플 설치 파일:

```
{
	"connectorClazz": "com.adobe.guides.konnect.definitions.ootb.connector.sql.MsSqlServerConnector",
	"configName": "MSSQLServer",
	"templateFolders": ["/content/dam/dita-templates/konnect/sql"],
	"connectionConfig": {
		"configClazz": "com.adobe.guides.konnect.definitions.ootb.config.sql.UserPassSqlConfig",
		"configData": {
			"username": "admin",
			"password": "admin",
			"driver": "com.microsoft.sqlserver.jdbc.SQLServerDriver",
			"connectionString": "jdbc:sqlserver://10.10.10.10\\SQLEXPRESS01:1433;database=TutorialDB;encrypt=false;trustServerCertificate=true"
		}
	}
}
```

예를 들어 다른 이름으로 저장 `mssqlserver.json`.

SQLite의 기본 인증을 위한 샘플 설치 파일:

```
{
	"connectorClazz": "com.adobe.guides.konnect.definitions.ootb.connector.sql.SqliteConnector",
	"configName": "SQLiteServer",
	"templateFolders": ["/content/dam/dita-templates/konnect/sql"],
	"connectionConfig": {
		"configClazz": "com.adobe.guides.konnect.definitions.ootb.config.sql.UserPassSqlConfig",
		"configData": {
			"username": "admin",
			"password": "admin",
			"driver": "org.sqlite.JDBC",
			"connectionString": "jdbc:sqlite:sample.db"
		}
	}
}
```

예를 들어 다른 이름으로 저장 `sqqlite.json`.



H2DB용 샘플 설정 파일:

```
{
	"connectorClazz": "com.adobe.guides.konnect.definitions.ootb.connector.sql.H2DBConnector",
	"configName": "H2DBConnector",
	"templateFolders": ["/content/dam/dita-templates/konnect/sql"],
	"connectionConfig": {
		"configClazz": "com.adobe.guides.konnect.definitions.ootb.config.sql.UserPassSqlConfig",
		"configData": {
			"username": "admin",
			"password": "admin",
			"driver": "org.h2.Driver",
			"connectionString": "jdbc:h2:file:D:/h2db/db"
		}
	}
}
```

예를 들어 다른 이름으로 저장 `sqqlite.json`.



MariaDb의 기본 인증을 위한 샘플 설정 파일:

```
{
	"connectorClazz": "com.adobe.guides.sample.konnect.connector.MariaDBConnector",
	"configName": "SampleMariaDbConnector",
	"templateFolders": ["/content/dam/dita-templates/konnect/sql"],
	"connectionConfig": {
		"configClazz": "com.adobe.guides.konnect.definitions.ootb.config.sql.UserPassSqlConfig",
		"configData": {
			"username": "admin",
			"password": "admin",
			"driver": "org.mariadb.jdbc.Driver",
			"connectionString": "jdbc:mariadb://no1010042073107.corp.adobe.com:3308/mysql"
		}
	}
}
```

예를 들어 다른 이름으로 저장 `mariadb.json`.


Elasticsearch의 기본 인증을 위한 샘플 설정 파일:

```
{
	"connectorClazz": "com.adobe.guides.konnect.definitions.ootb.connector.rest.ElasticsearchConnector",
	"configName": "SampleES",
	"templateFolders": ["/content/dam/dita-templates/konnect/sql"],
	"connectionConfig": {
		"configClazz": "com.adobe.guides.konnect.definitions.ootb.config.rest.BasicAuthUserNamePasswordRestConfig",
		"configData": {
			"username": "admin",
			"password": "admin",    	
			"url": "https://testsearch-1370045986.us-east-1.bonsaisearch.net:443"   }
	}
}
```

예를 들어 다른 이름으로 저장 `ES.json`.

Elastic Search에 대한 쿼리에는 인덱스와 쿼리가 포함되어야 합니다.

```
{
"index": "kibana_sample_data_ecommerce",
"queryString":{
    "query": {
        "match_all": {}
    }
}
}
```



AdobeCommerce NoAuth에 대한 샘플 설정 파일:

```
{
	"connectorClazz": "com.adobe.guides.konnect.definitions.ootb.connector.graphql.AdobeCommerceConnector",
	"configName": "SampleCommerce",
	"templateFolders": ["/content/dam/dita-templates/konnect"],
	"connectionConfig": {   "configClazz": "com.adobe.guides.konnect.definitions.ootb.config.rest.NoAuthRestConfig",
   "configData": {
   			"url": "http://host/graphql"   
		}
	}
}
```

예를 들어 다른 이름으로 저장 `commerce.json`.

### 커넥터 구성 사용자 정의

AEM Guides를 사용하면 사용자의 요구 사항에 맞게 구성 파일의 일부 값을 사용자 지정할 수 있습니다.

| 속성 이름 | 설명 |
|---|---|
| configName | 사용자는 커넥터를 식별하는 데 도움이 되는 구성 이름을 지정할 수 있습니다 |
| 템플릿 폴더 | 템플릿을 가져올 폴더 목록 |

다른 필드는 커넥터를 실행하기 위해 선택한 구성 클래스를 기반으로 사용자 정의됩니다.

## AEM의 한 위치에 파일 업로드

AEM Assets의 일부 위치에 파일을 업로드합니다.

예를 들어,  `/content/dam/jira.json`

## REST API를 사용하여 구성 만들기

REST API를 사용하여 구성을 등록할 수 있습니다. 자세한 내용은 *데이터 소스 커넥터를 등록하는 REST API* Adobe Experience Manager 섹션에 자세히 설명되어 있습니다.

데이터 소스를 구성하면 커넥터가 웹 편집기의 데이터 소스 패널 아래에 나열됩니다. 그런 다음 데이터 소스에 연결하고 주제에 콘텐츠 스니펫을 삽입할 수 있습니다. 자세한 내용은 [데이터 소스에서 콘텐츠 조각 삽입](../user-guide/web-editor-content-snippet.md).
