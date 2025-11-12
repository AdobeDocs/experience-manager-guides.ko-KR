---
title: 소개
description: AEM Guides용 API 참조 안내서 소개
exl-id: d8ee9cf7-1d67-4b4a-aa80-64e893a99463
feature: API Introduction
role: Developer
level: Experienced
source-git-commit: 67e844faece8b6bb8988bb0e67f357cda1db9a4d
workflow-type: tm+mt
source-wordcount: '623'
ht-degree: 0%

---

# 소개 {#id1761C0007W7}

Adobe Experience Manager Guides \(나중에 *AEM Guides*\)은(는) Adobe Experience Manager \(AEM\)에서 DITA 기반 콘텐츠 생성 및 전달을 위한 구성 요소 콘텐츠 관리 솔루션 \(CCMS\) 기능을 사용할 수 있도록 하는 종단간 엔터프라이즈 솔루션입니다. 고객은 AEM Guides API를 사용하여 프로그래밍 방식으로 AEM Guides 워크플로우에 액세스하여 다른 엔터프라이즈 애플리케이션과 통합할 수 있습니다. 이러한 API는 Adobe 파트너가 기능을 확장하거나 다른 애플리케이션 또는 서비스와 통합하여 AEM Guides의 가치 제안을 향상시키는 데 사용할 수도 있습니다.

## AEM GUIDES API

AEM Guides API는 두 가지 형식으로 사용할 수 있습니다.

- [Java 기반 API](#java-based-apis)
- [REST 기반 API](#rest-based-apis)

이러한 API는 AEM Guides의 주요 기능을 애플리케이션 개발자에게 노출합니다. 개발자는 이러한 기능을 사용하여 고유한 플러그인을 만들어 기본 제공 워크플로를 확장할 수 있습니다. API는 DITA 콘텐츠에 대한 출력 관리, DITA 맵 작업, 폴더 수준 프로필에 조건부 속성 추가, HTML 및 Words 문서를 DITA 형식으로 변환하는 것과 관련하여 사용할 수 있습니다.


### Java 기반 API

Experience Manager Guides에서 사용할 수 있는 Java 기반 API를 사용하여 사용자 지정 플러그인을 만들고 기본 제공 워크플로를 확장할 수 있습니다.

**AEM Guides as a Cloud Service에 대한 Maven 중앙 저장소에서 SDK 구성**

>[!INFO]
>
>Experience Manager Guides as a Cloud Service용 Java 기반 API 사용에 대한 최신 및 자세한 설명서는 [![javadoc](https://javadoc.io/badge2/com.adobe.aem/aem-dox-sdk-api/javadoc.svg)](https://javadoc.io/doc/com.adobe.aem/aem-dox-sdk-api/latest/index.html)을(를) 참조하십시오.

프로젝트의 Maven 저장소에서 서비스 API JAR을 구성하고 사용하려면 아래와 같이 API SDK을 프로젝트의 `pom.xml` 파일에 프로젝트 종속성으로 추가합니다.

    &quot;XML
    &lt;dependency>
    &lt;groupId>com.adobe.aem&lt;/groupId>
    &lt;artifactId>aem-dox-sdk-api&lt;/artifactId>
    &lt;version>${RELEASE}&lt;/version>
    &lt;/dependency>
    
    &quot;

>[!NOTE]
>
> 서버에 설치된 AEM Guides 패키지와 동일한 버전의 API JAR를 사용해야 합니다.

**Maven 중앙 저장소(온-프레미스)에서 API JAR 구성 및 사용**

>[!INFO]
>
>Experience Manager Guides 온-프레미스 설정용 Java 기반 API 사용에 대한 최신 및 자세한 설명서는 [![javadoc](https://javadoc.io/badge2/com.adobe.aem/aem-guides-sdk-api/javadoc.svg)](https://javadoc.io/doc/com.adobe.aem/aem-guides-sdk-api/latest/index.html)을(를) 참조하십시오.

온-프레미스 배포를 위해 서비스 API JAR을 구성하고 사용하려면 아래와 같이 서비스 API JAR을 프로젝트의 `pom.xml` 파일에 프로젝트 종속성으로 추가합니다.

    &quot;XML
    &lt;dependency>
    &lt;groupId>com.adobe.aem&lt;/groupId>
    &lt;artifactId>aem-guides-sdk-api&lt;/artifactId>
    &lt;version>${RELEASE}&lt;/version>
    &lt;/dependency>
    
    &quot;

>[!NOTE]
>
> 서버에 설치된 AEM Guides 패키지와 동일한 버전의 API JAR를 사용해야 합니다.


**AEM Guides 공용 Maven 저장소(온-프레미스)에서 API JAR 구성 및 사용**

>[!NOTE]
>
> 공개 AEM Guides Maven 저장소는 Experience Manager Guides 5.3.0 릴리스 이후 더 이상 사용되지 않습니다. API JAR는 그 후에 Maven 중앙 저장소에서만 사용할 수 있습니다.

공개 Maven 저장소에서 서비스 API JAR을 사용하려면 다음 단계를 수행하십시오.

1. 아래와 같이 `pom.xml` 또는 `settings.xml` 파일에서 AEM Guides 공용 Maven 저장소를 구성합니다.

   ```XML
   <repository>
       <id>fmdita-public</id>
       <name>fmdita-public</name>
       <url>https://repo.aem-guides.com/repository/fmdita-public</url>
    </repository>
   ```

1. 저장소가 설정되면 프로젝트의 `pom.xml` 파일에 프로젝트 종속성으로 서비스 API JAR를 추가합니다.

   ```XML
   <dependency>
       <groupId>com.adobe.fmdita</groupId>
       <artifactId>api</artifactId>
       <version>${RELEASE}</version>
   </dependency>
   ```

   >[!NOTE]
   >
   > 서버에 설치한 AEM Guides 패키지와 동일한 버전의 API JAR를 사용합니다.

서비스 API JAR이 프로젝트의 `pom.xml` 파일에 프로젝트 종속성으로 추가되면 프로젝트에서 AEM Guides Java API를 빌드하고 사용할 수 있습니다.


### REST 기반 API

Experience Manager Guides은 개발자가 HTTP를 통해 핵심 기능에 액세스하고 상호 작용할 수 있도록 하는 포괄적인 REST 기반 API 세트를 제공합니다.

이러한 API는 다음에 이상적입니다.

- Experience Manager Guides과 다른 엔터프라이즈 시스템 통합
- 게시 및 검토 워크플로우 자동화
- 맞춤형 애플리케이션 및 확장 구축

API 사용, 매개 변수 및 예제 요청에 대한 자세한 내용은 Experience Manager Guides 설명서의 **API 참조** 섹션에서 관련 항목을 참조하십시오.

## 추가 리소스

다음은 [학습 및 지원](https://helpx.adobe.com/support/xml-documentation-for-experience-manager.html) 페이지에서 사용할 수 있는 AEM Guides의 다른 유용한 리소스 목록입니다.

- 사용 안내서
- 설치 및 구성 안내서
- 빠른 시작 안내서
- [도움말 보관 페이지](https://helpx.adobe.com/xml-documentation-for-experience-manager/archive.html) \(이전 릴리스 설명서에 액세스\)
