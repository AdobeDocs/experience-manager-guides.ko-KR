---
title: 기본 PDF Publish 기능 | 사용자 정의 변경 막대 스타일 작업
description: 변경 막대에 스타일을 적용하는 방법에 대해 알아봅니다.
exl-id: a81ec56c-ccbb-4599-a696-8edef7a73cdd
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '348'
ht-degree: 0%

---

# 사용자 정의 변경 막대 스타일 작업

변경 막대는 새 콘텐츠 또는 수정된 콘텐츠를 시각적으로 식별하는 세로선입니다. AEM Guides을 사용하면 항목 내의 변경된 콘텐츠 왼쪽에 변경 막대를 표시할 수 있으며 PDF 출력의 목차에도 변경된 항목을 표시할 수 있습니다.

변경 막대 표시에 대한 자세한 내용은 [Publish PDF 출력](../web-editor/native-pdf-web-editor.md)에서 *게시된 버전 사이에 변경 막대를 사용하여 PDF 만들기* 설정을 참조하십시오.

## 주제 내 콘텐츠 변경됨

삽입, 변경 또는 삭제된 항목의 콘텐츠 왼쪽에 변경 막대가 표시됩니다.

다음 스타일을 수정하여 변경된 내용 및 변경 막대를 표시할 수 있습니다.


>[!NOTE]
>
>이러한 스타일은 `layout.css` 파일의 일부이며 필요에 따라 편집할 수 있습니다.

예를 들어 `.inserted-block` 스타일의 color 특성을 사용하여 삽입된 콘텐츠가 게시된 PDF 출력에 표시되는 방식을 정의할 수 있습니다.


```css
...
.inserted-block { 
  color: #2ECC40; 
  display: inline; 
  -ro-comment-content: " "; 
  -ro-comment-style: underline; 
  -ro-comment-title: "Inserted"; 
  -ro-comment-date: attr(data-time); 
  -ro-comment-dateformat: "yyyy/dd/MM HH:mm:ss"; 
} 
...
```

마찬가지로 `.deleted-block` 스타일을 사용하여 삭제된 콘텐츠가 게시된 PDF 출력에 표시되는 방식을 정의할 수 있습니다.

```css
...
.deleted-block { 
  display: inline; 
  color: #FF6961; 
  text-decoration: line-through; 
  -ro-comment-content: " "; 
  -ro-comment-style: strikeout; 
  -ro-comment-title: "Deleted"; 
  -ro-comment-date: attr(data-time); 
  -ro-comment-dateformat: "yyyy/dd/MM HH:mm:ss"; 
} 
...
```

`.inserted-change-bar` 및 `.deleted-change-bar` 스타일을 사용하여 업데이트된 콘텐츠의 왼쪽에 나타나는 변경 막대의 모양을 수정할 수 있습니다.

예를 들어 `.inserted-change-bar` 스타일의 `-ro-change-bar-color` 특성을 사용하여 삽입된 변경 막대를 녹색으로 표시할 수 있습니다. `.deleted-change-bar` 스타일에서 `-ro-change-bar-color` 특성을 사용하여 삭제된 변경 막대를 빨간색으로 표시할 수도 있습니다.

```css
...
.inserted-change-bar { 
  -ro-change-bar-color: #2ECC40; 
} 

.deleted-change-bar { 
  -ro-change-bar-color: #FF6961; 
  } 
...
```

<img src="./assets/changed-bar-content.png" alt="변경된 바 주제 콘텐츠" width="500">

## 목차(TOC)에서 변경된 주제

PDF 출력의 목차에서 변경된 주제 왼쪽에 변경 막대를 추가할 수도 있습니다. `.changed-topic` 스타일에서 `-ro-change-bar-color` 특성을 사용하여 목차 목록의 업데이트된 주제에 대해 선택한 색상의 변경 막대를 추가할 수 있습니다.

예를 들어 녹색 변경 막대를 추가할 수 있습니다.

```css
...
.changed-topic { 
 -ro-change-bar-color: #2ECC40; 
}  
...
```


일부 업데이트가 수행된 TOC의 모든 주제에 대해 녹색 변경 막대가 표시됩니다. 목차에서 변경된 주제를 클릭하고 자세한 변경 내용을 볼 수 있습니다.

<img src="./assets/changed-bar-TOC.png" alt="변경된 목차" width="500">
