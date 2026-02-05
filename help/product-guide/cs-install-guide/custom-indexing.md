---
title: 사용자 지정 색인화 배포
description: 콘텐츠를 사용자 지정하는 방법 알아보기
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 9a4f0391c464d69ea65ecfdaac6ecdcb17d1a3da
workflow-type: tm+mt
source-wordcount: '425'
ht-degree: 3%

---

# 찾기 및 바꾸기(Source 보기) 기능을 위한 사용자 지정 인덱스 배포

## 개요

이 안내서에서는 Adobe Experience Manager(AEM) as a Cloud Service에서 `guidesAssetLucene‑1‑custom‑1` 사용자 지정 인덱스를 배포하는 단계별 지침을 제공합니다. 작성자 보기의 표준 찾기 및 바꾸기 기능은 이 색인 없이 작동하지만, Source 보기에서 찾기 및 바꾸기를 활성화하려면 특히 사용자 지정 색인이 필요합니다. 찾기 및 바꾸기(Source 보기)를 사용하면 표시된 작성 콘텐츠뿐만 아니라 요소, 태그 및 특성 값을 포함한 기본 XML 구조를 검색할 수 있습니다.

## 사전 요구 사항

인덱스 배포를 진행하기 전에 다음을 확인하십시오.

- AEM Guides이 설치된 **AEM as a Cloud Service 환경**
- **프로젝트의 코드베이스에 액세스**(Git 저장소)
- 배포 권한이 있는 **Cloud Manager 액세스**

## 색인 정의

찾기 및 바꾸기(Source 보기) 기능을 활성화하려면 **`guidesAssetLucene-1-custom-1`**(이)라는 사용자 지정 색인을 AEM Cloud Service 환경에 배포해야 합니다.

### 색인 이름

```
guidesAssetLucene-1-custom-1
```

### 색인 정의(.content.xml)

프로젝트에서 다음 색인 정의를 만듭니다.

`ui.apps/src/main/content/jcr_root/_oak_index/guidesAssetLucene-1-custom-1/.content.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<jcr:root xmlns:jcr="http://www.jcp.org/jcr/1.0" xmlns:dam="http://www.day.com/dam/1.0"
          xmlns:nt="http://www.jcp.org/jcr/nt/1.0" xmlns:oak="http://jackrabbit.apache.org/oak/ns/1.0"
          xmlns:rep="internal"
          jcr:mixinTypes="[rep:AccessControllable]"
          jcr:primaryType="oak:QueryIndexDefinition"
          async="[async,nrt]"
          compatVersion="{Long}2"
          evaluatePathRestrictions="{Boolean}true"
          includedPaths="[/content/dam]"
          selectionPolicy="tag"
          tags="[ditaSearch]"
          type="lucene">

    <aggregates jcr:primaryType="nt:unstructured">
        <dam:Asset jcr:primaryType="nt:unstructured">
            <include0
                    jcr:primaryType="nt:unstructured"
                    path="jcr:content/renditions/original/jcr:content"
                    relativeNode="{Boolean}true"/>
        </dam:Asset>
    </aggregates>

    <analyzers jcr:primaryType="nt:unstructured">
        <default jcr:primaryType="nt:unstructured">
            <tokenizer
                    jcr:primaryType="nt:unstructured"
                    name="Whitespace"/>
        </default>
    </analyzers>

    <indexRules jcr:primaryType="nt:unstructured">
        <dam:Asset
                jcr:primaryType="nt:unstructured"
                indexNodeName="{Boolean}true">
            <properties jcr:primaryType="nt:unstructured">
                <cqTags
                        jcr:primaryType="nt:unstructured"
                        name="jcr:content/metadata/cq:tags"
                        nodeScopeIndex="{Boolean}true"
                        propertyIndex="{Boolean}true"
                        useInSpellcheck="{Boolean}true"
                        useInSuggest="{Boolean}true"/>
                <jcrLastModified
                        jcr:primaryType="nt:unstructured"
                        name="jcr:content/jcr:lastModified"
                        ordered="{Boolean}true"
                        propertyIndex="{Boolean}true"
                        type="Date"/>
                <jcrCreated
                        jcr:primaryType="nt:unstructured"
                        name="jcr:created"
                        ordered="{Boolean}true"
                        propertyIndex="{Boolean}true"
                        type="Date"/>
                <guidesParentMaps
                        jcr:primaryType="nt:unstructured"
                        name="jcr:content/guidesParentMaps"
                        propertyIndex="{Boolean}true"/>
                <guidesDirectParentMaps
                        jcr:primaryType="nt:unstructured"
                        name="jcr:content/guidesDirectParentMaps"
                        propertyIndex="{Boolean}true"/>
                <ditaClass
                        jcr:primaryType="nt:unstructured"
                        name="jcr:content/metadata/dita_class"
                        propertyIndex="{Boolean}true"/>
                <nodeNameLowerCase
                        jcr:primaryType="nt:unstructured"
                        function="fn:lower-case(fn:name())"
                        ordered="{Boolean}true"
                        propertyIndex="{Boolean}true"/>
                <cqDriveLock
                        jcr:primaryType="nt:unstructured"
                        name="jcr:content/cq:driveLock"
                        propertyIndex="{Boolean}true"
                        ordered="{Boolean}true"/>
                <docState
                        jcr:primaryType="nt:unstructured"
                        name="jcr:content/metadata/docstate"
                        propertyIndex="{Boolean}true"
                        ordered="{Boolean}true"/>
                <jcrPath
                        jcr:primaryType="nt:unstructured"
                        function="fn:path()"
                        ordered="{Boolean}true"/>
                <dcTitleLowerCase
                        jcr:primaryType="nt:unstructured"
                        function="fn:lower-case(jcr:first(jcr:content/metadata/@dc:title))"
                        propertyIndex="{Boolean}true"
                        ordered="{Boolean}true"/>
                <dcTitle
                        jcr:primaryType="nt:unstructured"
                        name="jcr:content/metadata/dc:title"
                        propertyIndex="{Boolean}true"/>
            </properties>
        </dam:Asset>
    </indexRules>

    <tika jcr:primaryType="nt:unstructured">
        <mimeTypes jcr:primaryType="nt:unstructured">
            <application jcr:primaryType="nt:unstructured">
                <xml
                        jcr:primaryType="nt:unstructured"
                        mappedType="application/dita+xml"/>
            </application>
            <text jcr:primaryType="nt:unstructured">
                <markdown
                        jcr:primaryType="nt:unstructured"
                        mappedType="text/markdown+source"/>
            </text>
        </mimeTypes>
    </tika>
</jcr:root>
```

## 배포 단계

AEM as a Cloud Service에 사용자 지정 색인을 배포하는 방법에 대한 자세한 지침은 [콘텐츠 검색 및 색인화 - AEM as a Cloud Service](https://experienceleague.adobe.com/ko/docs/experience-manager-cloud-service/content/operations/indexing)을 참조하세요.

### 이 색인의 중요 사항

배포 안내서를 따르는 경우 찾기 및 바꾸기 색인에 대해 다음 사양을 사용하십시오.

- **인덱스 이름**: `guidesAssetLucene-1-custom-1`
- **인덱스 유형**: 전체 사용자 지정 인덱스(OOTB 인덱스의 사용자 지정 아님)
- **위치**: `ui.apps/src/main/content/jcr_root/_oak_index/guidesAssetLucene-1-custom-1/.content.xml`
- **패키지 속성 필요**:
   - `noIntermediateSaves=true`
   - `allowIndexDefinitions=true`

## 리인덱싱

리인덱싱은 Cloud Manager의 CI/CD 파이프라인을 통해 인덱스를 배포할 때 AEM as a Cloud Service에서 **자동으로** 처리됩니다.

색인화는 일반적으로 자동으로 처리됩니다. 단, 올바른 배포와 색인화 프로세스 완료 후에도 이전 데이터를 검색할 수 없는 상태로 유지하는 경우 색인의 수동 재색인을 한 번 수행해야 합니다.

### 기대 사항

- 배포 후 인덱싱 작업이 자동으로 시작됩니다.
- Cloud Manager 빌드 페이지에서 진행 상황을 모니터링할 수 있습니다.
- 색인화 중에도 환경은 여전히 완전히 작동합니다.

## 인증

배포 및 색인화가 완료되면 색인이 올바르게 작동하는지 확인하십시오.

### 인덱스 배포 확인

개발 환경(CRXDE Lite이 사용 가능한 경우)에서:

1. 다음으로 이동 `/oak:index/guidesAssetLucene-1-custom-1`.
2. 예상한 구성으로 노드가 존재하는지 확인합니다.

### 찾기 및 바꾸기 기능 테스트

기본 확인은 다음 기능을 테스트하는 것입니다.

1. AEM Guides을 엽니다.
2. **도구** > **안내서** > **저장소에서 찾기 및 바꾸기**&#x200B;로 이동합니다.
3. DITA 또는 Markdown 파일에서 텍스트 검색을 구성합니다.
4. 검색 결과가 올바르게 반환되는지 확인합니다.
5. 테스트 파일에서 바꾸기 기능을 테스트합니다.

## 추가 리소스

- [AEM as a Cloud Service 인덱싱 문서](https://experienceleague.adobe.com/ko/docs/experience-manager-cloud-service/content/operations/indexing)
- [Apache Jackrabbit Oak 색인화 안내서](https://jackrabbit.apache.org/oak/docs/query/indexing.html)
- [AEM Guides 설명서](https://experienceleague.adobe.com/ko/docs/experience-manager-guides)
- [Cloud Manager 설명서](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-manager)
