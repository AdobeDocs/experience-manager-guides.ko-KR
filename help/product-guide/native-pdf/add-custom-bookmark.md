---
title: 기본 PDF 게시 기능 | PDF 출력에 사용자 지정 책갈피 추가
description: 사용 스타일시트를 만들고 콘텐츠의 스타일을 만드는 방법에 대해 알아봅니다.
exl-id: 6e6dbba3-da41-4066-b7b2-735a3d92b70a
source-git-commit: 5e0584f1bf0216b8b00f00b9fe46fa682c244e08
workflow-type: tm+mt
source-wordcount: '230'
ht-degree: 0%

---

# PDF 출력에 사용자 지정 책갈피 추가

일반적으로 DITA 맵의 목차는 최종 PDF 출력에서 책갈피로 복제됩니다. 이 목차는 DITA 맵의 주제 또는 섹션 제목에서 만들어집니다. 간편한 탐색을 위해 PDF 출력의 특정 콘텐츠에 사용자 지정 책갈피를 추가하는 경우가 있습니다. 다음을 추가하여 수행할 수 있습니다. `outputclass` 요소에 속성을 지정하고 다음 속성을 적용합니다.

`bookmark-level: 3`

여기, `bookmark-level` 은(는) 속성 및 숫자입니다. `3` 는 책갈피가 추가되는 책갈피 계층의 수준을 나타내는 값입니다. 다음 예제에서는 첫 번째 수준의 &quot;Contacts&quot; 주제에 을(를) 추가한 &quot;Contact list&quot; 테이블이 있습니다. `outputclass` 값이 인 속성 `custom-bookmark`.


<img src="./assets/custom-bookmark-attribute.png" width="500">

다음에 대한 정의: `custom-bookmark` 클래스가 CSS 파일에 추가됩니다.

```css
…
/*Adding a custom bookmark*/
.custom-bookmark{
    bookmark-level: 2
}
…
```

PDF 출력에서 *연락처 목록* 아래 표시된 대로 PDF 책갈피 목록의 두 번째 수준에 테이블이 추가됩니다.

<img src="./assets/custom-bookmark-in-pdf-output.png" width="500">

>[!NOTE]
>
>사용자 지정 책갈피를 추가할 올바른 수준을 선택해야 합니다. 상위 항목의 책갈피보다 작은 숫자를 지정하면 사용자 지정 책갈피가 상위 책갈피의 위치를 차지하고 다른 모든 책갈피는 하위 책갈피로 표시됩니다. 이로 인해 예기치 않은 책갈피 구조가 발생할 수 있습니다.
