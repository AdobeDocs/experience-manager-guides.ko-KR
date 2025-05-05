---
title: AEM Guides의 DITA 콘텐츠 재사용
description: 이 간략한 문서에서는 AEM Guides 및 DITA를 통해 콘텐츠 재사용 가능성을 사용할 때 시간과 노력을 절약하는 방법을 설명합니다
role: User, Admin
author: Pulkit Nagpal(punagpal)
exl-id: 1522ebf5-2aea-4d8f-ade7-367227b31dd9
source-git-commit: f971be4be9e2d32618616727cd9c682941dd3fb2
workflow-type: tm+mt
source-wordcount: '541'
ht-degree: 0%

---

# AEM Guides의 콘텐츠 재사용 가능성

Adobe AEM Guides은 DITA의 강점을 활용하여 컨텐츠 재사용을 위한 사용자 친화적인 인터페이스를 제공합니다.

이 문서에서는 다음 사항에 대해 설명합니다.

1. [주제 참조( )를 사용하여 재사용 가능](#reusability-using-topic-referencestopicref)
2. [콘텐츠 참조를 사용한 재사용 가능성(](#reusability-using-content-reference-conref--conkeyref)
3. [AEM Guides에서 드래그하여 놓기로 콘텐츠를 재사용하는 보너스 팁](#reuse-content-with-a-single-click-in-aem-guides)

## 주제 참조를 사용한 재사용 가능성(topicref)



제조 회사이고 안전 주의 사항 또는 문제 해결 기술에 대한 일반적인 항목이 있다고 가정해 보겠습니다.

이러한 정보는 각 시스템 모델에 대한 특정 사용자 설명서에서 참조되고 조정될 수 있으므로 중복성을 줄이고 핵심 안전 정보가 일관되게 유지됩니다.

```
<map id="user_manual_model 100" title="ABC Model 100 User Manual ">


<topicref href="Safety_Information.dita" format="dita">
</topicref>
.
.
.
.
.
</map>
```


모델 200의 경우와 유사

```
<map id="user_manual_model 200" title="ABC Model 200 User Manual ">

<topicref href="Safety_Information.dita" format="dita">
</topicref>
.
.
.
.
.
  
</map>
```

## 콘텐츠 참조를 사용한 재사용 가능성(conref 및 conkeyref)

콘텐츠 참조(conref) 속성을 사용하면 콘텐츠의 다른 부분에 연결할 수 있습니다. 이를 통해 재사용성을 높이고 중복성을 줄일 수 있습니다.

예:

금융 기업이고 개인, 기업 등에 대한 KYC 절차를 포함하는 KYC에 대한 일반적인 주제가 있다고 가정해 보겠습니다.

&quot;계정 저장&quot; 및 &quot;계정 설명&quot; 주제에 대해 개별 KYC 조각을 재사용하려고 합니다.

```
<section id="kyc_requirements_saving_account">
  <title>Know Your Customer (KYC) Requirements</title>
  <p>To comply with regulations and ensure customer identification, all individual applicants for savings  accounts must fulfill the KYC requirements as outlined below</p>
  <p conref=kyc_procedures.dita#individual_kyc></p>
</section>
```

여기서 `conref=kyc_procedures.dita#indvidual_kyc` kyc_procedures.dita는 파일 식별자이고 #individual_kyc은 조각 식별자입니다.

Kyc_procedure.dita는 정보의 유일한 소스입니다. 규정 변경 시 KYC 프로세스에 대한 업데이트가 필요한 경우 새로운 항목으로 주제 경로를 업데이트합니다. 변경 사항은 이를 참조하는 모든 주제에 자동으로 반영됩니다.

AEM Guides을 사용하여 두 번의 클릭

1단계: 재사용 가능한 콘텐츠 삽입 클릭
![도구 모음](../../assets/publishing/content-reusability_image1.png)

<br>

2단계: 재사용해야 하는 파일 및 조각을 선택합니다.
![conref](../../assets/publishing/content-reusability_image2.png)

&#39;conref&#39;와 마찬가지로 &#39;conkeyref&#39;를 사용하고 콘텐츠 경로를 제공하는 대신 키를 통해 콘텐츠를 참조할 수 있습니다

코드 예 :

```
<section conkeyref="kyc_procedure/individual_kyc_procedure" id="individual_kyc_procedure"></section>
```

키 정의는 다음과 같습니다.

```
<map id="ABC_manual">
  <title>ABC_Manual</title>
  <topicref href="kyc_procedure_2020.dita" keys="kyc_procedure" processing-role="resource-only" type="concept">
  </topicref>
  <topicref href="savings_account.dita" type="concept">
  </topicref>
</map>
```

키 - &#39;Kyc_procedure&#39;는 정보의 단일 소스입니다. 규정에 따라 KYC 프로세스에 변경 사항이 있는 경우 새 주제 경로로 한 주제 경로를 갱신하면 해당 변경 사항이 해당 변경 사항을 참조하는 모든 주제에 자동으로 반영됩니다.

```
<map id="ABC_manual">
  <title>ABC_Manual</title>
  <topicref href="kyc_procedure_2024.dita" keys="kyc_procedure" processing-role="resource-only" type="concept">
  </topicref>
  <topicref href="savings_account.dita" type="concept">
  </topicref>
</map>
```

여기서는 최근 규정 변경으로 인해 주제 경로가 &quot;kyc_procedure_2020.dita&quot;에서 &quot;kyc_procedure_2024.dita&quot;로 변경되었습니다.

AEM Guides을 사용하여 두 번의 클릭

1단계: 재사용 가능한 콘텐츠 삽입 클릭
![도구 모음](../../assets/publishing/content-reusability_image1.png)

2단계: 재사용해야 하는 루트 맵(선택 사항), 키 및 조각을 선택합니다.
![conkeyref](../../assets/publishing/content-reusability_image3.png)

여기서 루트 맵은 맵 보기에서 이미 열려 있으므로 자동으로 선택됩니다.


## AEM Guides에서 한 번의 클릭으로 콘텐츠 재사용

AEM Guides은 한 번의 클릭으로 콘텐츠 참조를 추가할 수 있는 &quot;재사용 가능한 콘텐츠&quot; 기능을 제공합니다.

1단계: 재사용 가능한 콘텐츠에 일반 주제 추가

![재사용 가능한 콘텐츠 추가](../../assets/publishing/content-reusability_image4.png)

2단계: 추가되면 대상 주제에서 재사용할 조각을 드래그하여 놓습니다.

![재사용 가능한 콘텐츠 gif 추가](../../assets/publishing/content-reusability_image5.gif)



## FAQ

- ### 콘텐츠 재사용 대화 상자에서 파일/키를 선택한 후 모든 콘텐츠가 표시되지 않습니다

다른 주제에서 재사용할 조각(Dita 요소)에 ID 할당

- ## 콘텐츠 재사용 대화 상자에 키가 표시되지 않습니다.

  맵 보기에서 루트 맵/상위 맵을 열었는지 확인합니다. 이 맵에는 키 정의가 있으며 동일한 대화 상자에서 루트 맵 경로를 수동으로 추가합니다.


<br>
<br>
<br>


모든 쿼리를 위해 AEM Guides 커뮤니티 [포럼](https://experienceleaguecommunities.adobe.com/t5/experience-manager-guides/ct-p/aem-xml-documentation?profile.language=ko)에 게시하십시오.
