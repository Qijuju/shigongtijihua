
<script>
    const API_ROOT ='http://tljjgxt.r93535.com'
    const ORG_ID = '265'
    const workflowTypeId = '16'
    const workflowId = ''
    //var baseUserId = '102300'
    //var baseUserId = '223906'
    //var baseUserId = '235998'
    var baseUserId = ''
    //var baseUserId = '102298'
    var sessionId=''
    var sessionUrl=''


    export default {
          API_ROOT,
          ORG_ID,
          workflowTypeId,
          workflowId,
          baseUserId,
          sessionId,
          sessionUrl,
          setBaseUserId (newBaseUserId) {
            this.baseUserId = newBaseUserId
            console.log('姓名已经改变')
          },
          setSessionId (newSessionId) {
            this.sessionId = newSessionId
          },
          setSessionUrl (newSessionUrl) {
            this.sessionUrl = newSessionUrl
          },
          isEmptyObject(e) {
            var t;
            for (t in e)
              return !1;
            return !0
          },
    }
</script>

