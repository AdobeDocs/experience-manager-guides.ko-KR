---
title: 사용자 지정된 템플릿을 기반으로 맵 만들기
description: 사용자 지정 템플릿을 만들고, 이 템플릿을 사용하여 새 맵 파일을 만들고, 정의된 제목을 AEM Guides의 DITA 맵에 전달하는 방법을 알아봅니다.
feature: Authoring, Map Editor
role: User
hide: true
exl-id: 0f86ac98-7ba4-4e15-8a1f-83456afa7570
source-git-commit: 4801f0d327b4bd0641aa195d39ec2c4be2a2ce74
workflow-type: tm+mt
source-wordcount: '1103'
ht-degree: 0%

---

# 사용자 지정된 템플릿을 기반으로 맵 만들기 {#id225VF0808MP}

사용자 정의된 맵 템플릿을 만들고 이 템플릿을 사용하여 맵 템플릿에서 참조되는 주제 템플릿 및 맵 템플릿과 함께 DITA 맵을 만들 수 있습니다

사용자 정의된 맵 템플릿에서 다른 맵 템플릿 및 주제 템플릿을 참조할 수 있습니다. 참조된 맵 템플릿은 다양한 맵 템플릿, 주제 템플릿, 주제, 맵, 이미지, 비디오 및 기타 에셋을 지칭할 수 있다. 사용자 지정된 맵 템플릿을 사용하면 맵 템플릿과 전체 참조 폴더 구조를 매우 쉽게 복제할 수 있습니다. 이러한 사용자 정의된 템플릿은 재귀 구조 및 참조가 있는 여러 맵을 만들고 다시 만드는 데 특히 유용합니다.

>[!NOTE]
>
> 주제 템플릿은 재귀적으로 생성되지 않습니다. 맵 템플릿 내부에 바로 있는 주제 템플릿만 생성되고 주제 템플릿 내부의 모든 주제 템플릿은 상위 템플릿에서 바로 참조됩니다.

## 사용자 지정된 템플릿 만들기

AEM Guides을 사용하면 dita-templates 폴더에서 사용자 정의된 맵과 주제를 만들 수 있습니다. 이러한 사용자 지정된 템플릿을 사용하여 맵과 주제를 만들 수 있습니다. 작성자와 이러한 템플릿을 공유하여 해당 파일을 만들 수도 있습니다. 이러한 템플릿을 사용하면 작성자가 템플릿 폴더 내에 있는 특정 리소스의 복사본을 별도로 유지할 수 있습니다.

>[!NOTE]
>
> 에서 참조하고 유지 관리만 하는 모든 리소스는 템플릿 폴더 외부에 있어야 합니다.


다음과 같은 방법으로 맵 및 주제 템플릿을 만들 수 있습니다.
1. [왼쪽 패널](./web-editor-features.md#left-panel-id2051ea0m0hs)의 서식 파일 창
1. [Assets UI의 템플릿](#templates-assets-ui)
1. [옵션 메뉴](#templates-in-assets-ui)

### Assets UI의 템플릿 {#templates-assets-ui}

**주제 템플릿**

주제 템플릿을 만들려면 다음 단계를 수행하십시오.

1. **Assets UI**&#x200B;에서 dita-templates 폴더로 이동합니다.

   ![](images/dita-templates.png){width="800" align="left"}

1. **주제** 폴더를 클릭하여 엽니다.**DITA 템플릿 만들기 \>**&#x200B;를 클릭합니다.
1. 블루프린트 페이지에서 **주제**&#x200B;를 선택한 후 **다음**&#x200B;을 클릭합니다.
1. 속성 페이지에서 주제 템플릿 **제목**&#x200B;을 지정하십시오.
1. 파일 **이름** 지정

   >[!NOTE]
   >
   > 파일 이름에는 .dita 확장명이 있어야 합니다.

1. \(선택 사항\) 설명을 추가합니다.
1. **만들기**&#x200B;를 클릭합니다. 주제 템플릿이 생성되었습니다 메시지가 나타납니다. 그런 다음 주제 템플릿을 열고 편집할 수 있습니다.

**맵 템플릿**

맵 템플릿을 만들려면 다음 단계를 수행하십시오.

1. **Assets UI**&#x200B;에서 dita-templates 폴더로 이동합니다.
1. **맵** 폴더를 클릭하여 엽니다.
1. **DITA 템플릿 만들기 \>**&#x200B;를 클릭합니다.

   ![](images/create-dita-template.png){width="300" align="left"}

1. 블루프린트 페이지에서 **맵**&#x200B;을 선택하고 **다음**&#x200B;을 클릭합니다.
1. 속성 페이지에서 맵 템플릿 **제목**&#x200B;을 지정하십시오.
1. **이름** 파일을 지정하십시오.

   >[!NOTE]
   >
   > 파일 이름에는 .ditamap 확장명이 있어야 합니다.

1. (선택 사항\) 설명을 추가합니다. **만들기**&#x200B;를 클릭합니다. 맵 템플릿이 생성되었습니다 메시지가 나타납니다. 그런 다음 맵 템플릿을 열고 편집할 수 있습니다. 맵 템플릿에서 주제 템플릿, 맵 템플릿 및 기타 에셋에 대한 참조를 추가할 수 있습니다.

### 옵션 메뉴 {#options-menu}

맵 또는 주제 템플릿을 만들려면 다음 단계를 수행하십시오.

1. 현재 템플릿 폴더에서 **맵** 또는 **주제** 폴더를 선택하십시오. 예를 들면 `dita-templates` 폴더를 입력합니다.
1. **옵션** 메뉴에서 **맵 템플릿 만들기** 또는 **주제 템플릿 만들기**&#x200B;를 선택합니다.

   **새 맵 템플릿 만들기** 또는 **새 주제 템플릿 만들기** 대화 상자가 열립니다.
1. 새 템플릿의 제목과 이름을 입력합니다.
1. **템플릿** 드롭다운 목록에서 만들려는 템플릿 유형을 선택합니다.

맵 템플릿이 생성되었습니다 메시지가 나타납니다. 전역 또는 폴더 수준 프로필에 템플릿을 추가할 수 있습니다. 그런 다음 새 템플릿이 주제나 맵 만들기 프로세스에 나타나고, 이를 사용하여 맵이나 주제를 만들 수 있습니다.


또한 관리자는 폴더를 만들고 사용자가 템플릿을 만들고 저장할 수 있는 폴더로 구성할 수 있습니다.

설정에 따라 사용자 지정 DITA 템플릿 폴더 경로를 구성하는 방법을 알아봅니다.
<details>
    <summary> 클라우드 서비스 </summary>

Cloud Services 설치 및 구성 안내서에서 [사용자 지정 DITA 템플릿 폴더 경로를 구성](/help/product-guide/install-guide/conf-template-tags-custom-dita-topic-template.md#configure-custom-dita-template-folder-path-id191lcf0095z)하는 방법을 알아봅니다.
</details>

<details>
    <summary> On-premise Software</summary>

On-premise 설치 및 구성 안내서에서 [사용자 지정 DITA 템플릿 폴더 경로를 구성](/help/product-guide/cs-install-guide/conf-template-tags-custom-dita-topic-template.md#configure-custom-dita-template-folder-path-id191lcf0095z)하는 방법을 알아봅니다.
</details>

## 템플릿에 정의된 제목 전달

템플릿 내에서 사용된 주제나 맵의 제목을 해당 템플릿을 사용하여 만든 DITA 맵에 전달하려면 제목 주위에 중괄호를 사용합니다.

예

```XML
<pubtitle>
   <mainpubtitle outputclass="booktitle">
   {title}
   </mainpubtitle>
   <subtitle>Subtitle</subtitle>
</pubtitle>

The resultant DITA map with title "Rootmap1" will look like as follows:
<pubtitle>
   <mainpubtitle outputclass="booktitle">Rootmap1
   </mainpubtitle>
   <subtitle>Subtitle</subtitle>
</pubtitle>
```

>[!NOTE]
> 중괄호의 처음 발생만 제목으로 바뀝니다.

제목 주위에 중괄호를 사용하지 않으면 결과 DITA 맵의 첫 번째 요소만 선택되고 제목의 중첩은 템플릿에서 선택되지 않으며 다음과 같이 표시됩니다.

```XML
<pubtitle> Rootmap1 </pubtitle>
```

>[!NOTE]
> 텍스트 주위에 중괄호를 사용하여 중첩된 구조를 사용자 지정 템플릿에서 DITA 맵으로 전달할 수도 있습니다.

예

```XML
<title>    
    <sub>        
        <b>{title}</b>    
    </sub>
</title>
```




## 맵 템플릿을 사용하여 새 맵 만들기

>[!NOTE]
>
> 맵 템플릿을 구성하고 관리자가 작성할 수 있도록 해야 합니다. 자세한 내용은 Adobe Experience Manager Guides as a Cloud Service 설치 및 구성 섹션의 *작성 템플릿 구성* 섹션을 참조하십시오.

사용자 지정 맵 템플릿을 사용하여 맵을 만들려면 다음 단계를 수행하십시오.

1. **Assets UI에서**&#x200B;맵을 만들 폴더로 이동합니다.
1. **DITA 맵 만들기 \>**&#x200B;를 클릭합니다.
1. 블루프린트 페이지에서 사용할 맵 템플릿을 선택하고 **다음**&#x200B;을 클릭합니다. 예를 들어 맵 템플릿 &#39;test-template&#39;을 만든 경우 선택합니다.
1. 속성 페이지에서 맵 **제목**&#x200B;을 지정하십시오.
1. **이름** 파일을 지정하십시오.

   >[!NOTE]
   >
   > 파일 이름에는 .ditamap 확장명이 있어야 합니다.

1. **만들기**&#x200B;를 클릭합니다. 맵이 생성됨 메시지가 나타납니다.


맵은 템플릿 폴더 내에서 참조되는 모든 에셋을 생성합니다. 맵에서 참조되는 일부 에셋 유형은 다음과 같습니다.

- 맵에 주제 템플릿에 대한 참조가 포함되어 있으면 폴더 내에 `dita-templates` 폴더의 주제 폴더와 동일한 계층 구조로 복사본이 만들어집니다.
- 맵에 맵 템플릿에 대한 참조가 포함된 경우 폴더 내에 `dita-templates` 폴더의 맵 폴더와 동일한 계층 구조로 맵 템플릿의 사본이 만들어집니다.
- 맵에 `dita-templates/topics` 또는 `dita-templates/maps` 폴더 외부의 주제 또는 맵에 대한 일반 참조가 포함된 경우 동일한 참조만 사용되며 복사본이 만들어지지 않습니다.

  >[!NOTE]
  >
  > `dita-templates/topics` 및 `dita-templates/maps`은(는) 가이드의 기본 경로이며 구성할 수 있습니다.


  맵 템플릿 내에 주제 템플릿 키 정의가 있는 경우 새 키 \(따라서 새 주제\)가 작성되고 맵에서 참조됩니다.

- 폴더의 동일한 수준에서 다른 맵이나 주제가 만들어지면 새로 만든 에셋의 이름에 0,1,2 등이 추가됩니다. 편집할 맵을 열거나 맵 파일을 저장소에 저장하도록 선택할 수 있습니다.

**상위 항목:**&#x200B;[&#x200B;맵 편집기 작업](map-editor.md)
