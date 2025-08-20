---
title: 대상 경로, 사이트 경로, 사이트 이름 또는 파일 이름 옵션 설정에 변수 사용
description: 대상 경로, 사이트 이름 또는 파일 이름 옵션을 설정하는 데 변수를 사용하는 방법에 대해 알아봅니다. AEM Guides에서 지원되는 기본 제공 변수 이해
exl-id: 3396c971-6332-45b5-b2ef-b07f0abf97f7
feature: Publishing
role: User
source-git-commit: 358d38ca761661eaee7aeac2cc7d46c53105c543
workflow-type: tm+mt
source-wordcount: '414'
ht-degree: 0%

---

# 대상 경로, 사이트 경로, 사이트 이름 또는 파일 이름 옵션 설정에 변수 사용


AEM Sites 또는 PDF에서 출력을 생성하는 동안 변수를 사용하여 대상 경로, 사이트 경로, AEM 사이트 이름 또는 PDF 파일 이름 옵션을 정의할 수 있습니다. 단일 또는 변수 조합을 사용하여 이러한 옵션을 정의할 수 있습니다.

다음 표에는 즉시 지원되는 변수가 나열되어 있습니다.

| 변수 | 최종 대상 경로 | 예 |
| --- | --- | --- |
| `${map_filename}` | DITA 맵 파일 이름을 사용하여 대상 경로를 만듭니다. | **DITA 맵 파일 이름**:<br>`AEMGuides.ditamap`<br><br>**대상 경로** 구성:<br>`/content/output/sites/${map_filename}`<br><br>**최종 출력 위치**:<br>`/content/output/sites/aemGuides/AEMGuides.html` |
| `${map_title}` | DITA 맵 제목을 사용하여 대상 경로를 만듭니다. | **DITA 맵 파일 이름**:<br>`AEMGuides.ditamap`<br><br>**DITA 맵 제목**:<br>`AEMGuides`<br><br>**대상 경로** 구성:<br>`/content/output/sites/${map_title}`<br><br>**최종 출력 위치**:<br>`/content/output/sites/AEMGuides/AEMGuides.html` |
| `${preset_name}` | 출력 사전 설정 이름을 사용하여 대상 경로를 만듭니다. | **출력 사전 설정 이름**:<br>`AEM Guides PDF Output`<br><br>**DITA 맵 파일 이름**:<br>`SampleDita.ditamap`<br><br>**대상 경로** 구성:<br>`/content/output/sites/${preset_name}`<br><br>**최종 출력 위치**:<br>`/content/output/sites/AEM Guides PDF Output/SampleDita.html` |
| `${language_code}` | 맵 파일이 있는 언어 코드를 사용하여 대상 경로를 만듭니다. | **DITA 맵 파일 이름**:<br>`SampleDita.ditamap`<br><br>**DITA 맵 파일 경로**:<br>`/content/dam/projects/AEM-Guides/en/user-guide/`<br><br>**대상 경로** 구성:<br>`/content/output/sites/${language_code}`<br><br>**최종 출력 위치**:<br>`/content/output/sites/en/SampleDita.html` |
| `${map_parentpath}` | 맵 파일의 전체 경로를 사용하여 대상 경로를 만듭니다.<br><br>**참고**:This 변수는 AEM 사이트 이름 또는 PDF 파일 이름을 지정하는 데 사용할 수 없습니다. | **DITA 맵 파일 이름**:<br>`SampleDita.ditamap`<br><br>**DITA 맵 파일 경로**:<br>`/content/dam/projects/AEM-Guides/en/user-guide`/<br><br>**대상 경로** 구성:<br>`/content/output/sites/${map_parentpath}`<br><br>**최종 출력 위치**:<br>`/content/output/sites/content/dam/projects/AEM-Guides/en/user-guide/SampleDita.html` |
| `${path_after_langfolder}` | 언어 폴더 뒤에 있는 맵 파일의 경로를 사용하여 대상 경로를 만듭니다.<br><br>**참고**: 이 변수는 AEM 사이트 이름 또는 PDF 파일 이름을 지정하는 데 사용할 수 없습니다. | **DITA 맵 파일 이름**:<br>`SampleDita.ditamap`<br><br>**DITA 맵 파일 경로**:<br>`/content/dam/projects/AEM-Guides/en/user-guide/`<br><br>**대상 경로** 구성:<br>`/content/output/sites/${path\_after\_langfolder}`<br><br>**최종 출력 위치**:<br>`/content/output/sites/user-guide/SampleDita.html` |
| `${system_date}` | 현재 서버 날짜를 사용하여 대상 경로를 만듭니다. | **DITA 맵 파일 이름**: <br> `SampleDita.ditamap` <br><br> **DITA 맵 파일 경로:** <br> `/content/dam/projects/AEM-Guides/en/user-guide/` <br><br> **대상 경로**&#x200B;이(가) <br>(으)로 구성됨 `/content/output/sites/${system_date}` <br> <br> **최종 출력 위치:** <br> /`content/output/sites/08252023/SampleDita.html` |
| `${system_time}` | 현재 서버 시간을 사용하여 대상 경로를 만듭니다. | **DITA 맵 파일 이름:** <br>`SampleDita.ditamap` <br> <br> **DITA 맵 파일 경로:** <br>`/content/dam/projects/AEM-Guides/en/user-guide/` <br><Br>**대상 경로** 구성: <br> `/content/output/sites/${system_time}`<br><br>**최종 출력 위치:**<br>`/content/output/sites/055612/SampleDita.html` |

또한 DITA 맵이나 북맵 파일에 대해 정의된 메타데이터를 변수로 사용할 수도 있습니다. 메타데이터는 DITA 맵 또는 북맵 파일의 `/jcr:content/metadata` 노드에서 찾을 수 있습니다. 예를 들어 `/jcr:content/metadata` 노드에 정의된 메타데이터 속성 중 하나는 `dc:title`입니다. `${dc:title}`을(를) 지정할 수 있으며 제목 값은 최종 출력에서 사용됩니다.
**상위 항목:**[&#x200B;출력 생성](generate-output.md)
