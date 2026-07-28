---
title: Experience Manager Guides 릴리스의 API 업데이트
description: Experience Manager Guides 릴리스의 다양한 API 업데이트에 대해 알아봅니다
source-git-commit: 24637376024107ae575620e5491c0150da6cc956
workflow-type: tm+mt
source-wordcount: '500'
ht-degree: 2%

---


# Experience Manager Guides 릴리스의 API 업데이트

이 문서에서는 Adobe Experience Manager Guides 릴리스에 대한 Swagger 설명서에 새로 추가된 API에 대한 세부 정보를 제공합니다. **도구** > **안내서** > **API Swagger**(으)로 이동하여 AEM 인터페이스를 통해 Swagger 설명서에 액세스할 수 있습니다.

<table style="border: 1; border-collapse: collapse; table-layout:fixed">
    <tr>
        <td colspan="5"><strong>릴리스 2026.08.0</strong></td>
    </tr>
    <tr>
        <td>기능</td>
        <td>하위 기능</td>
        <td>메서드</td>
        <td>API</td>
        <td>설명</td>
    </tr>
    <tr>
        <td rowspan="7"><b>자산</b></td>
        <td rowspan="7"></td>
        <td>POST</td>
        <td>`/bin/guides/v1/asset/import`</td>
        <td>하나 이상의 자산을 대상 폴더로 가져옵니다. 다중 부분 업로드 및 충돌 해결을 지원합니다.</td>
    </tr>
    <tr>
        <td>POST</td>
        <td>"/bin/guides/v1/asset/list"</td>
        <td>폴더 경로 아래에 있는 자산의 페이지 매김된 목록을 반환합니다.</td>
    </tr>
    <tr>
        <td>POST</td>
        <td>`/bin/guides/v1/asset/validatexml`</td>
        <td>DITA XML의 형식, 스키마 유효성 및 conref 무결성을 확인합니다.</td>
    </tr>
    <tr>
        <td>POST</td>
        <td>`/bin/guides/v1/asset/version/revert`</td>
        <td>자산을 지정된 버전으로 되돌립니다.</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>`/bin/guides/v1/asset/currentversion/detail`</td>
        <td>현재 버전 세부 사항(버전 이름, 더티 상태, 레이블 등)을 반환합니다.</td>
    </tr>
    <tr>
        <td>POST</td>
        <td>`/bin/guides/v1/assets/status`</td>
        <td>지정된 경로에서 자산의 안내 상태를 확인하는 비동기 작업을 시작합니다.</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>`/bin/guides/v1/assets/status`</td>
        <td>작업 ID별로 에셋 상태 작업의 상태/결과를 검색합니다.</td>
    </tr>
    <tr>
        <td rowspan="3"><b>게시</b></td>
        <td rowspan="3"></td>
        <td>POST</td>
        <td>"/bin/guides/v1/output/generate"</td>
        <td>사전 설정 실행을 시작하여 맵에 대한 출력을 생성합니다.</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>`/bin/guides/v1/output/status`</td>
        <td>맵 경로 및 생성 ID별로 단일 출력 생성 상태 반환</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>`/bin/guides/v1/output/status/list`</td>
        <td>맵 경로에 대해 생성된 모든 사전 설정의 상태를 반환합니다.</td>
    </tr>
    <tr>
        <td rowspan="18"><b>번역</b></td>
        <td rowspan="6">언어</td>
        <td>GET</td>
        <td>"/bin/guides/v1/translation/language/copies"</td>
        <td>경로 또는 UUID별 자산의 언어 사본</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>"/bin/guides/v1/translation/language/groups"</td>
        <td>폴더 프로필에 대한 언어 그룹</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>"/bin/guides/v1/translation/language/list"</td>
        <td>번역 언어 지원(필터링)</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>"/bin/guides/v1/translation/language/root"</td>
        <td>자산 경로에 사용할 수 있는 루트 언어</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>"/bin/guides/v1/translation/language/variable"</td>
        <td>유형 및 언어 코드별 언어 변수</td>
    </tr>
    <tr>
        <td>POST</td>
        <td>"/bin/guides/v1/translation/language/variable"</td>
        <td>언어 변수 만들기, 업데이트 또는 삭제</td>
    </tr>
    <tr>
        <td rowspan="7">프로젝트</td>
        <td>POST</td>
        <td>"/bin/guides/v1/translation/project/create"</td>
        <td>DITA 맵에 대한 번역 프로젝트 만들기/업데이트</td>
    </tr>
    <tr>
        <td>POST</td>
        <td>"/bin/guides/v1/translation/project/sync"</td>
        <td>번역 프로젝트 만들기/업데이트(동기화 흐름)</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>`/bin/guides/v1/translation/project/creationstatus`</td>
        <td>경로를 통한 프로젝트의 번역 동기화 상태</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>"/bin/guides/v1/translation/project/existing"</td>
        <td>현재 사용자에 대한 기존 번역 프로젝트</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>"/bin/guides/v1/translation/project/inprogress"</td>
        <td>주어진 자산에 대해 진행 중인 프로젝트</td>
    </tr>
    <tr>
        <td>삭제</td>
        <td>"/bin/guides/v1/translation/project/delete"</td>
        <td>자산 번역 상태/속성의 사전 삭제 업데이트</td>
    </tr>
    <tr>
        <td>삭제</td>
        <td>"/bin/guides/v1/translation/project/job/delete"</td>
        <td>작업 제거 전 자산 상태 사전 삭제 업데이트</td>
    </tr>
    <tr>
        <td rowspan="5">참조</td>
        <td>POST</td>
        <td>`/bin/guides/v1/translation/reference/accept`</td>
        <td>작업 하위 페이지에서 번역된 콘텐츠 수락</td>
    </tr>
    <tr>
        <td>POST</td>
        <td>`/bin/guides/v1/translation/reference/reject`</td>
        <td>작업 하위 페이지에서 번역된 콘텐츠 거부</td>
    </tr>
    <tr>
        <td>POST</td>
        <td>`/bin/guides/v1/translation/reference/sync`</td>
        <td>대상 폴더에 언어 사본 만들기</td>
    </tr>
    <tr>
        <td>POST</td>
        <td>`/bin/guides/v1/translation/reference/baseline/export`</td>
        <td>번역 기준을 대상 언어로 내보내기</td>
    </tr>
    <tr>
        <td>POST</td>
        <td>`/bin/guides/v1/translation/reference/status/forcesync`</td>
        <td>동기화되지 않은 에셋을 동기화되지 않은 상태로 강제 업데이트</td>
    </tr>
</table>
