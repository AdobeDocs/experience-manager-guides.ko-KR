---
title: 사용자 지정 DITA 유형에 대한 구성 아이콘
description: AEM의 다른 UI에 해당 아이콘을 표시하기 위해 사용자 지정 dita 유형의 아이콘을 정의하는 방법을 알아봅니다
exl-id: 5a259ea0-3b5f-4c6e-b488-1586767aa991
source-git-commit: 7355f48ba8ad0ac15c54be183d9aa91bb88724e8
workflow-type: tm+mt
source-wordcount: '491'
ht-degree: 0%

---

# 사용자 지정/특수 dita(주제 또는 맵) 유형에 대한 아이콘 구성


## 문제 설명

AEM Guides에서 사용하는 사용자 지정 스키마를 사용하여 사용자 지정 주제 또는 맵 유형을 만들 수 있으며, 이를 통해 웹 편집기 또는 Assets UI에 사용자 지정 주제/맵 유형이 아이콘을 표시하지 않을 수 있습니다. 참조하려면 아래 스크린샷 을 참조하십시오

![참조용 스크린샷](../assets/authoring/custom-ditatype-icon-notshown.png)


따라서 사용자 정의 주제/맵 유형에 아이콘을 할당하려면 다음을 수행해야 합니다.
- 사용자 정의 항목/맵 유형 찾기
- 스타일을 작성하여 사용자 정의 유형에 원하는 아이콘을 추가하십시오.


위의 단계를 구현하여 웹 편집기(저장소 보기)와 Assets UI에 아이콘을 표시할 수 있습니다. 다음은 두 단계에 대한 단계입니다


## 웹 편집기 보기에서 사용자 지정 주제/맵의 아이콘 표시

_1단계:_ 사용자 지정 dita 주제/ap에 대한 dita 유형을 결정합니다.
- 웹 편집기에서 저장소 보기를 열고 브라우저에서 개발자 콘솔을 엽니다.
- Inspect 나열된 항목/맵 옆에 있는 아이콘 공간
- 사용자 정의 주제에 할당된 클래스 확인
- 자세한 내용은 아래 스크린샷을 참조하십시오. ![스크린샷 보기](../assets/authoring/custom-ditatype-icon-knowditatype.png)
- 이 클래스를 사용하여 아이콘을 할당하고 css를 작성합니다.

_2단계:_ css를 만들고 이 dita 유형에 아이콘을 지정하십시오.
- /apps 아래에 클라이언트 라이브러리를 만들면 원하는 경로에 cq:ClientLibraryFolder를 만들 수 있습니다.
   - &quot;apps.fmdita.xml_editor.page&quot; 범주를 추가합니다.
- 이 디렉터리 아래에 &quot;assets&quot; 폴더를 만들고 사용자 지정 dita 유형에 사용할 모든 아이콘을 추가합니다
- 클라이언트 라이브러리 폴더 아래에 css 파일 추가(예: &quot;tree-icons.css&quot;)
   - 여기에 다음 코드 추가

```
            .tree-item-icon {
                &.custommaptype {
                    background-image: url('assets/custommap.svg')
                }
                &.customtopictype {
                    background-image: url('assets/customtopic.svg')
                }
            }
```

- 클라이언트 라이브러리 폴더 아래에 css.txt를 추가하고 방금 만든 &quot;tree-icon.css&quot;에 참조를 추가합니다.
- 이러한 변경 내용 저장/배포

자세한 내용은 아래 스크린샷을 참조하십시오.
![스크린샷 참조](../assets/authoring/custom-ditatype-icon-define-webeditor-styles.png)

그리고 최종 출력은 아래 스크린샷에 나와 있습니다
![스크린샷에 표시](../assets/authoring/custom-ditatype-icon-webeditor-showstyles.png)


## Assets UI에서 사용자 정의 주제/맵에 대한 아이콘 표시

사용자 지정 dita 주제/맵의 dita 유형을 결정하는 _단계 1:_
- 이 내용은 이전 메서드의 1단계에 설명되어 있습니다

_2단계:_ 사용자 지정 항목/맵 유형에 대해 사용자 지정 dita 유형에 로드할 아이콘을 정의하는 Javacscript 만들기
- /apps 아래에 클라이언트 라이브러리를 만들면 원하는 경로에 cq:ClientLibraryFolder를 만들 수 있습니다.
   - 다음 속성을 추가합니다.
      - &quot;categories&quot;(multivalue string) 값을 &quot;dam.gui.admin.coral&quot;로 설정합니다.
      - &quot;dependencies&quot;(복수 값 문자열) 값을 &quot;libs.fmdita.versioncontrol&quot;로 표시
- 이 /apps 디렉토리에 파일 &quot;/libs/fmdita/clientlibs/clientlibs/xmleditor/clientlib-dam/topic_type.js&quot;의 복사본을 만듭니다.
   - 복사된 &quot;topic_type.js&quot;를 편집하고, &quot;typeImageNameMap&quot; 변수 아래에서 customtopictype을 변경/추가합니다.
   - 변수 &quot;parentImagePath&quot;의 값을 사용자 지정 아이콘이 저장된 위치로 변경하여 이미지 폴더의 경로를 변경할 수도 있습니다
- 클라이언트 라이브러리 폴더 아래에 js.txt 파일을 만들고 &quot;topic_type.js&quot;에 대한 참조를 추가합니다.
- 이러한 변경 내용 저장/배포
자세한 내용은 아래 스크린샷을 참조하십시오.
  ![스크린샷 참조](../assets/authoring/custom-ditatype-icon-define-assetsui-styles.png)

최종 출력은 스크린샷 ![스크린샷에 표시](../assets/authoring/custom-ditatype-icon-assetsui-showstyles.png)와 같이 나타납니다.
