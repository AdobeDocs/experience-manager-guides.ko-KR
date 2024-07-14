---
title: 기본 PDF Publish 기능 | PDF 출력에 사용자 지정 책갈피 추가
description: 사용 스타일시트를 만들고 콘텐츠의 스타일을 만드는 방법에 대해 알아봅니다.
exl-id: 6e6dbba3-da41-4066-b7b2-735a3d92b70a
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '230'
ht-degree: 0%

---

# PDF 출력에 사용자 지정 책갈피 추가

일반적으로 DITA 맵의 목차는 최종 PDF 출력에서 책갈피로 복제됩니다. 이 목차는 DITA 맵의 주제 또는 섹션 제목에서 만들어집니다. 간편한 탐색을 위해 PDF 출력의 특정 콘텐츠에 사용자 지정 책갈피를 추가하는 경우가 있습니다. 이 작업은 요소에 `outputclass` 특성을 추가하고 해당 요소에 다음 특성을 적용하여 수행할 수 있습니다.

`bookmark-level: 3`

여기서 `bookmark-level`은(는) 속성이며 숫자 `3`은(는) 책갈피가 추가되는 책갈피 계층 구조의 수준을 나타내는 값입니다. 다음 예제에서는 첫 번째 수준 항목 &quot;연락처&quot;에 값이 `custom-bookmark`인 `outputclass` 특성을 추가한 테이블 &quot;연락처 목록&quot;이 있습니다.


<img src="./assets/custom-bookmark-attribute.png" width="500">

CSS 파일에 `custom-bookmark` 클래스의 다음 정의가 추가됩니다.

```css
…
/*Adding a custom bookmark*/
.custom-bookmark{
    bookmark-level: 2
}
…
```

PDF 출력에서 *연락처 목록* 테이블이 아래와 같이 PDF 책갈피 목록의 두 번째 수준에 추가됩니다.

<img src="./assets/custom-bookmark-in-pdf-output.png" width="500">

>[!NOTE]
>
>사용자 지정 책갈피를 추가할 올바른 수준을 선택해야 합니다. 상위 항목의 책갈피보다 작은 숫자를 지정하면 사용자 지정 책갈피가 상위 책갈피의 위치를 차지하고 다른 모든 책갈피는 하위 책갈피로 표시됩니다. 이로 인해 예기치 않은 책갈피 구조가 발생할 수 있습니다.
