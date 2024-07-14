---
title: 소개
description: AEM Guides용 API 참조 안내서 소개
exl-id: d8ee9cf7-1d67-4b4a-aa80-64e893a99463
feature: API Introduction
role: Developer
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '725'
ht-degree: 0%

---

# 소개 {#id1761C0007W7}

Adobe Experience Manager Guides \(나중에 *AEM Guides*\)는 Adobe Experience Manager \(AEM\)에서 DITA 기반 콘텐츠 생성 및 전달을 위한 구성 요소 콘텐츠 관리 솔루션 \(CCMS\) 기능을 사용할 수 있도록 하는 종단간 엔터프라이즈 솔루션입니다. 고객은 AEM Guides API를 사용하여 프로그래밍 방식으로 AEM Guides 워크플로우에 액세스하여 다른 엔터프라이즈 애플리케이션과 통합할 수 있습니다. 이러한 API는 Adobe 파트너가 기능을 확장하거나 다른 애플리케이션이나 서비스와 통합하여 AEM Guides의 가치 제안을 향상시키는 데 사용할 수도 있습니다.

## AEM GUIDES API

AEM Guides API는 HTTP와 Java의 두 가지 형식으로 사용할 수 있습니다. 이러한 API는 AEM Guides의 주요 기능을 애플리케이션 개발자에게 노출합니다. 개발자는 이러한 기능을 사용하여 고유한 플러그인을 만들어 기본 제공 워크플로를 확장할 수 있습니다. API는 DITA 콘텐츠에 대한 출력 관리, DITA 맵 작업, 폴더 수준 프로필에 조건부 속성 추가, HTML 및 Words 문서를 DITA 형식으로 변환 등과 관련하여 사용할 수 있습니다.

## 로컬 Apache Maven 저장소에 JAR 설치 {#install-jar-local}

AEM Guides에 의해 노출된 JAR 파일을 사용하려면 로컬 Apache Maven 저장소에 해당 파일을 설치해야 합니다. 다음 단계를 수행하여 위치 Maven 저장소에 JAR을 설치합니다.

1. 로컬 시스템에서 AEM Guides 패키지 \(.zip\) 파일의 컨텐츠를 추출합니다.

2. 명령 프롬프트에서 추출된 콘텐츠 경로의 다음 폴더로 이동합니다.

   ```
   \jcr_root\libs\fmdita\osgi-bundles\install
   ```

3. 다음 명령을 실행하여 로컬 Maven 저장소에 API 번들을 설치합니다.

   ```
   mvn install:install-file -Dfile=api-X.x.jar -DgroupId=com.adobe.fmdita -DartifactId=api -Dversion=X.x -Dpackaging=jar**
   ```

   >[!NOTE]
   >
   > 위의 명령에서 X.x는 Dfile 및 Dversion 매개 변수에서 실제 버전 번호로 대체되어야 합니다.

4. \(*선택 사항*\) 로컬 Maven 프로젝트의 저장소에 종속성을 설치합니다. Maven 프로젝트에서 폴더를 만든 다음 다음 다음 추가 매개 변수를 사용하여 이전 단계에서 제공된 `mvn install` 명령을 실행하여 이를 수행할 수 있습니다.

   ```
   -DlocalRepositoryPath=<path_to_project_repository>
   ```

   그런 다음 프로젝트의 로컬 저장소 폴더를 Maven 빌드 프로세스에 노출하려면 아래와 같이 상위 pom.xml 파일에 `repository` 요소를 추가합니다.

   ```XML
   <repositories>
      <repository>
         <id>project-repository</id>
         <url>file://${project.basedir}/repository</url>
      </repository>
   </repositories>
   ```


이 프로세스는 로컬 Maven 저장소에 API JAR을 설치합니다.

## Maven 프로젝트에서 서비스 API JAR 사용

로컬 Maven 저장소에 API JAR을 설치한 후 다음 단계를 수행하여 프로젝트에서 JAR을 사용합니다.

1. JAR를 코드 베이스에 추가하고 &quot;종속성&quot;과 같은 폴더 아래의 코드 베이스 저장소에 커밋합니다. 폴더 이름은 코드 기반 계층 구조에 따라 다릅니다.

2. 프로젝트 pom.xml 파일을 다음과 같이 구성합니다.

   상위 프로젝트의 pom.xml 파일:

   >[!IMPORTANT]
   >
   > 다음 코드 스니펫에서 X.x는 실제 버전 번호 및 API JAR의 파일 이름으로 대체되어야 합니다. 이 정보는 [설치 프로세스](#install-jar-local)의 3단계에 제공된 것과 같습니다.

   ```XML
   <plugin>
   
       <groupId>org.apache.maven.plugins</groupId>
   
      <artifactId>maven-install-plugin</artifactId>
   
       <version>2.5.2</version>
   
       <configuration>
   
               <groupId>com.adobe.fmdita</groupId>
   
               <artifactId>api</artifactId>
   
               <version>X.x</version>
   
               <file>${basedir}/dependencies/fmdita/api-X.x.jar</file>
   
               <packaging>jar</packaging>
   
               <generatePom>true</generatePom>
   
       </configuration>
   
       <executions>
   
           <execution>
   
               <id>inst_fmdita</id>
   
                   <goals>
   
                       <goal>install-file</goal>
   
                   </goals>
   
                   <phase>clean</phase>
   
           </execution>
   
       </executions>
   </plugin>
   ```

   하위 모듈의 pom.xml 파일:

   ```XML
   <plugin>
      <groupId>org.apache.maven.plugins</groupId>
   
      <artifactId>maven-install-plugin</artifactId>
   
      <configuration>
   
         <groupId>com.adobe.fmdita</groupId>
   
         <artifactId>api</artifactId>
   
         <version>3.6</version>
   
         <file>${basedir}/../dependencies/fmdita/api-3.6.jar</file>
   
         <packaging>jar</packaging>
   
         <generatePom>true</generatePom>
   
      </configuration>
   
      <executions>
   
         <execution>
   
            <id>inst_fmdita</id>
   
            <goals>
   
               <goal>install-file</goal>
   
            </goals>
   
            <phase>clean</phase>
   
         </execution>
   
      </executions>
   
   </plugin>
   ```


## 공개 Maven 저장소에서 서비스 API JAR 구성 및 사용

프로젝트의 공개 Maven 저장소에서 서비스 API JAR을 구성하고 사용하려면 다음 단계를 수행하십시오.

1. 프로젝트에서 서비스 API JAR을 사용하려면 pom.xml 파일에 AEM Guides 공개 Maven 저장소를 구성합니다.
2. 다음과 같이 Maven의 settings.xml 파일에서 공개 Maven 저장소를 구성합니다.

   ```XML
   <repository>
      <id>fmdita-public</id>
      <name>fmdita-public</name>
      <url>https://repo.aem-guides.com/repository/fmdita-public</url>
   </repository>
   ```

3. 저장소가 설정되면 프로젝트의 pom.xml 파일에 프로젝트 종속성으로 서비스 API JAR을 추가합니다.

   >[!NOTE]
   >
   > 서버에 설치한 AEM Guides 패키지와 동일한 버전의 API JAR를 사용합니다.

4. 아래와 같이 Maven 종속성을 구성합니다.

   ```XML
   <dependency>
      <groupId>com.adobe.fmdita</groupId>
      <artifactId>api</artifactId>
      <version>4.0</version>
   </dependency>
   ```


서비스 API JAR이 프로젝트의 pom.xml 파일에 프로젝트 종속성으로 추가되면 프로젝트에서 AEM Guides Java API를 빌드하고 사용할 수 있습니다.

## AEM Guidesas a Cloud Service 용 Maven Central 리포지토리의 API JAR 사용

AEM Guidesas a Cloud Service 의 경우 API JAR가 Maven Central에 배포되었습니다. 설정 없이 API JAR를 사용할 수 있습니다.

>[!NOTE]
>
> API Jar의 명명 규칙이 클라우드 추가 기능 명명 규칙에 따라 업데이트되었습니다.

API JAR을 사용하려면 아래와 같이 프로젝트의 pom.xml에 종속성을 추가해야 합니다.

```XML
<dependency>
   <groupId>com.adobe.aem</groupId>
   <artifactId>aem-guides-sdk-api</artifactId>
   <version>2022.5</version>
</dependency>
```

>[!NOTE]
>
> API JAR 내의 패키지는 여전히 동일하므로 기존 클라우드 프로젝트에서 이 API JAR를 사용하기 위해 코드를 변경할 필요가 없습니다.

## 추가 리소스

다음은 [학습 및 지원](https://helpx.adobe.com/support/xml-documentation-for-experience-manager.html) 페이지에서 사용할 수 있는 AEM Guides의 다른 유용한 리소스 목록입니다.

- 사용 안내서
- 설치 및 구성 안내서
- 빠른 시작 안내서
- [도움말 보관 페이지](https://helpx.adobe.com/xml-documentation-for-experience-manager/archive.html) \(이전 릴리스 설명서에 액세스\)
